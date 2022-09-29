import { useNavigate, useOutletContext } from 'react-router-dom'
import useSWR, { useSWRConfig } from 'swr'
import {
  AlertCircle,
  Calendar,
  Copy,
  Key,
  Lock,
  ShieldCheck,
  ShieldX,
  Target,
  TwoFA
} from 'tabler-icons-react'

import AvatarChangeSvg from '../assets/avatar-change.svg'
import {
  enableTwoFactorAuth,
  getConfirmedPasswordStatus,
  getQRCode,
  getRecoveryCodes,
  confirmTwoFactorAuth,
  disableTwoFactorAuth
} from '../services/auth'
import * as ROUTES from '../constants/routes'
import { useState } from 'react'

const Settings = () => {
  const [twoFACode, setTwoFACode] = useState('')
  const { data: passwordStatus } = useSWR('password-status', () => getConfirmedPasswordStatus())
  const { data: qrCode } = useSWR(
    passwordStatus && passwordStatus.confirmed ? 'QRCode' : null,
    () => getQRCode()
  )
  const { data: recoveryCodes } = useSWR(
    passwordStatus && passwordStatus.confirmed ? 'recovery-codes' : null,
    () => getRecoveryCodes()
  )
  const { mutate } = useSWRConfig()
  const navigate = useNavigate()

  const [user] = useOutletContext()

  const twoFAEnabled = user && user.two_factor_secret && user.two_factor_recovery_codes

  const handleEnableTwoFA = () => {
    if (!passwordStatus?.confirmed || !passwordStatus) navigate(ROUTES.CONFIRM_PASSWORD)
    if (passwordStatus && passwordStatus.confirmed) {
      mutate('user', () => enableTwoFactorAuth())
      mutate('QRCode')
      mutate('recovery-codes')
    }
  }

  const handleConfirmTwoFA = async () => {
    if (twoFACode.length === 6) {
      const reqBody = new FormData()
      reqBody.append('code', twoFACode)
      try {
        const response = await confirmTwoFactorAuth(reqBody)
        if (response.status === 200) {
          setTwoFACode('')
          mutate('user')
        }
      } catch (err) {
        if (err.response && err.response.data) console.log(err.response.data.message)
      }
    }
  }

  const handleDisableTwoFA = async () => {
    await mutate('user', () => disableTwoFactorAuth())
    //todo toast message
  }

  return (
    <div>
      <section className="bg-white bg-opacity-50 bg-grid bg-repeat py-10 px-6 md:px-9">
        <div className="flex flex-col gap-y-2.5">
          <h5 className="text-lg font-medium leading-6 text-gray-900">Account Settings</h5>
          <p className="text-md leading-5 text-gray-600">Your personal specialized page.</p>
        </div>
      </section>
      <section className="w-full grid-cols-3 divide-gray-100 bg-dotted-pattern bg-top bg-repeat-x md:divide-y 2xl:grid">
        <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
          <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
            Profile Settings
          </div>
          <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
            <div className="rounded-full bg-gray-100 p-2">
              <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                <Target />
              </div>
            </div>
            <h5 className="font-medium text-gray-900">Profile Settings</h5>
          </div>
          <div className="flex flex-col gap-y-6 px-6 py-7 pb-10 md:gap-y-7 md:px-9">
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-2.5 md:mt-3"
                defaultValue="Vukasin Vitorovic"
              />
            </div>
            <div className="flex items-center justify-between gap-x-6 py-3">
              <input type="file" name="avatar" className="hidden" />
              <div className="flex items-center gap-x-4">
                <img
                  src={AvatarChangeSvg}
                  className="h-16 w-16 rounded-full object-cover object-center"
                  alt="Change Avatar SVG"
                />
                <div>
                  <p className="text-md leading-5 text-gray-600">Profile Picture</p>
                  <p className="mt-2 text-[13px] leading-5 text-gray-400 line-clamp-1">
                    Use a square image for best results
                  </p>
                </div>
              </div>
              <button className="btn-primary">Choose</button>
            </div>
            <div>
              <label htmlFor="biography">
                Biography <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                name="biopgraphy"
                className="mt-2.5 md:mt-3"
                id="biopgraphy"
                rows="5"></textarea>
            </div>
            <div>
              <label htmlFor="birthday">Birthday</label>
              <div className="relative">
                <input
                  type="date"
                  id="birthday"
                  defaultValue="2022-01-01"
                  className="mt-2.5 appearance-none md:mt-3"
                />
                <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                  <Calendar strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end md:mt-4">
              <button className="btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
        <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
          <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
            Security - Password
          </div>
          <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
            <div className="rounded-full bg-gray-100 p-2">
              <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                <Key />
              </div>
            </div>
            <h5 className="font-medium text-gray-900">Security - Password</h5>
          </div>
          <div className="flex flex-col gap-y-6 px-6 py-7 pb-10 md:gap-y-7 md:px-9">
            <div>
              <label htmlFor="current_password">Current Password</label>
              <input type="password" id="current_password" className="mt-2.5 md:mt-3" />
            </div>
            <div>
              <label htmlFor="new_password">New Password</label>
              <input type="password" id="new_password" className="mt-2.5 md:mt-3" />
            </div>
            <div>
              <label htmlFor="confirm_new_password">Repeat Password</label>
              <input type="password" id="confirm_new_password" className="mt-2.5 md:mt-3" />
            </div>
            <div className="mt-3 md:mt-2">
              <div className="flex items-start gap-x-4 rounded-lg border border-dotted border-gray-200 py-4 px-5">
                <div className="hidden pt-0.5 pr-0.5 text-gray-400 lg:block">
                  <AlertCircle />
                </div>
                <div>
                  <h5 className="text-md font-medium leading-5 text-gray-600">Password Update</h5>
                  <p className="mt-2.5 text-sm leading-6 text-gray-500">
                    Once you update your password every active session will be terminated an you'll
                    need to re-enter your new password in order to continue.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end md:mt-4">
              <button className="btn-primary flex items-center gap-x-1.5 pl-3">
                <span>
                  <Lock className="text-gray-400" size={20} />
                </span>
                <span>Update Password</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
            2FA Authentication
          </div>
          <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
            <div className="rounded-full bg-gray-100 p-2">
              <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                <TwoFA />
              </div>
            </div>
            <h5 className="font-medium text-gray-900">2FA Authentication</h5>
          </div>
          <div className="flex flex-col px-6 py-7 pb-10 md:px-9">
            {twoFAEnabled && user && !user.two_factor_confirmed_at ? (
              <ul className="space-y-14">
                <li>
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-base font-semibold text-white">
                      1
                    </div>
                    <h4 className="text-base font-medium text-gray-800">Scan the code</h4>
                  </div>
                  <div className="mt-5">
                    <div
                      onClick={console.info(
                        'otpauth://totp/Project%20X:ventusblade1%40gmail.com?secret=LZKKND254WEDICP7&issuer=Project%20X&algorithm=SHA1&digits=6&period=30'
                      )}
                      className="grid aspect-square w-60 place-items-center justify-items-center rounded-lg border border-gray-200 p-2.5">
                      {qrCode && qrCode.svg ? (
                        <div dangerouslySetInnerHTML={{ __html: qrCode.svg }} />
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-6 text-gray-500">
                    Scan the QR code using any authentication application, we highly recommend using
                    Google's Authentication App. It's available for both IOS and Android via App &
                    Play Store.
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-base font-semibold text-white">
                      2
                    </div>
                    <h4 className="text-base font-medium text-gray-800">Save recovery codes</h4>
                  </div>
                  <div className="mt-6 divide-y divide-gray-100 rounded-lg border border-gray-200 text-sm text-gray-700">
                    {recoveryCodes &&
                      recoveryCodes.map((code, index) => (
                        <div key={index} className="py-2.5 px-5">
                          {code}
                        </div>
                      ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="btn-primary flex items-center gap-x-1.5 pl-3">
                      <span>
                        <Copy size={20} className="text-gray-400" />
                      </span>
                      <span>Copy All</span>
                    </button>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-base font-semibold text-white">
                      3
                    </div>
                    <h4 className="text-base font-medium text-gray-800">Insert current code</h4>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="code">Code</label>
                    <div className="mt-2.5 flex items-center gap-x-6 md:mt-3">
                      <input
                        maxLength={6}
                        value={twoFACode}
                        onChange={(e) => setTwoFACode(e.target.value)}
                        type="text"
                        id="code"
                        placeholder="XXXXXX"
                      />
                      <button onClick={handleConfirmTwoFA} className="btn-primary">
                        Verify
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ) : null}

            {twoFAEnabled && user && user.two_factor_confirmed_at ? (
              <div className="flex items-start gap-x-4 rounded-lg border border-dotted border-gray-200 py-4 px-5">
                <div className="hidden pt-0.5 pr-0.5 text-gray-400 lg:block">
                  <ShieldCheck />
                </div>
                <div>
                  <h5 className="text-md font-medium leading-5 text-gray-600">
                    2FA Protection Active
                  </h5>
                  <p className="mt-2.5 text-sm leading-6 text-gray-500">
                    You have enabled 2FA protection successfully! If you want to disable it, click
                    the button below.
                  </p>
                  <button onClick={handleDisableTwoFA} className="btn-primary mt-4 py-2">
                    Disable 2FA Protection
                  </button>
                </div>
              </div>
            ) : null}
            {!twoFAEnabled && user && !user.two_factor_confirmed_at ? (
              <div className="flex items-start gap-x-4 rounded-lg border border-dotted border-gray-200 py-4 px-5">
                <div className="hidden pt-0.5 pr-0.5 text-gray-400 lg:block">
                  <ShieldX />
                </div>
                <div>
                  <h5 className="text-md font-medium leading-5 text-gray-600">
                    2FA Protection Inactive
                  </h5>
                  <p className="mt-2.5 text-sm leading-6 text-gray-500">
                    You don't have 2FA protection enabled! If you want to enable it, click the
                    button below.
                  </p>
                  <button onClick={handleEnableTwoFA} className="btn-primary mt-4 py-2">
                    Enable 2FA Protection
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Settings
