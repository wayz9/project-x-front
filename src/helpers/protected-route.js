/* import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from '../constants/routes'
import Nav from '../components/Nav' */
import { Link } from 'react-router-dom'
import {
  Book2,
  Braces,
  BrandGithub,
  Calendar,
  CircleSquare,
  Clock,
  CodePlus,
  Components,
  Crown,
  Diamond,
  Dice,
  Focus2,
  Ghost,
  HeartRateMonitor,
  Language,
  LayersUnion,
  LetterM,
  Menu2,
  Pencil,
  Settings,
  Stack2,
  Stars,
  Trash,
  Users
} from 'tabler-icons-react'
import clsx from 'clsx'
import { useState } from 'react'

const ProtectedRoute = () => {
  const [headerOpen, setHeaderOpen] = useState(false)
  const data = [
    {
      id: 1,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      title: 'The Batman',
      year: '2021',
      availability: '1080P, 2160P, 720P',
      tagline: 'Unmask the truth.',
      released_at: '06.05.2022',
      description:
        "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
    },
    {
      id: 2,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2MiG2aG2OrOgnPpbv8xnuS984xQ.jpg',
      title: 'Thor: Love and Thunder',
      year: '2022',
      availability: '1080P, 2160P, 720P',
      tagline: 'The one is not the only.',
      released_at: '11.12.2021',
      description:
        'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.'
    },
    {
      id: 3,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
      title: 'Doctor Strange: Multiverse of Madness',
      year: '2022',
      availability: '1080P, 2160P, 3D',
      tagline: 'Enter a new dimension of Strange.',
      released_at: '18.5.2023',
      description:
        'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.'
    },
    {
      id: 4,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
      title: 'Top Gun: Maverick',
      year: '2022',
      availability: '1080P, 720P, 3D',
      tagline: 'Feel the need... The need for speed.',
      released_at: '18.5.2022',
      description:
        'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.'
    },
    {
      id: 5,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/td5uOBW41ib1KGz3g1Kc33BdFyj.jpg',
      title: 'Next',
      year: '2007',
      availability: '2160P, 3D',
      tagline: 'If you can see the future, you can save it.',
      released_at: '18.5.2023',
      description:
        'Las Vegas showroom magician Cris Johnson has a secret which torments him: he can see a few minutes into the future. Sick of the examinations he underwent as a child and the interest of the government and medical establishment in his power, he lies low under an assumed name in Vegas, performing cheap tricks and living off small-time gambling "winnings." But when a terrorist group threatens to detonate a nuclear device in Los Angeles, government agent Callie Ferris must use all her wiles to capture Cris and convince him to help her stop the cataclysm.'
    },
    {
      id: 6,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
      title: 'Prey',
      year: '2022',
      availability: '1080P, 2160P, 3D',
      tagline: 'They hunt to live. It lives to hunt.',
      released_at: '18.5.2023',
      description:
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.'
    }
  ]

  return (
    <div className="relative flex min-h-screen antialiased">
      <nav
        className={clsx(
          'fixed top-0 left-0 z-30 h-screen w-[300px] shrink-0 overflow-y-auto bg-white bg-dotted-pattern-vertical bg-right bg-repeat-y duration-150 md:w-80 lg:sticky lg:transform-none lg:overflow-hidden lg:opacity-100 lg:transition-none lg:hover:overflow-y-auto',
          {
            '-translate-x-full opacity-0 ease-out': !headerOpen,
            'translate-x-0 opacity-100 ease-in': headerOpen
          }
        )}>
        <div className="flex bg-dotted-pattern bg-bottom bg-repeat-x py-[18px] px-8 md:py-7">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="36"
              viewBox="0 0 128 36"
              fill="none">
              <g clipPath="url(#clip0_356_2830)">
                <path
                  d="M50.5 26L55.92 12H58.12L63.5 26H61.2L58 17.56C57.96 17.4667 57.88 17.24 57.76 16.88C57.6533 16.52 57.5267 16.12 57.38 15.68C57.2333 15.24 57.1 14.84 56.98 14.48C56.86 14.1067 56.78 13.8667 56.74 13.76L57.2 13.74C57.12 13.9667 57.02 14.2533 56.9 14.6C56.7933 14.9467 56.6733 15.3133 56.54 15.7C56.42 16.0867 56.3 16.4533 56.18 16.8C56.06 17.1333 55.96 17.4133 55.88 17.64L52.7 26H50.5ZM52.9 22.52L53.7 20.44H60.06L60.98 22.52H52.9ZM68.9439 26.2C68.0639 26.2 67.2706 26.0467 66.5639 25.74C65.8572 25.4333 65.2706 24.98 64.8039 24.38L66.2039 23.18C66.6039 23.6467 67.0372 23.9867 67.5039 24.2C67.9839 24.4 68.5239 24.5 69.1239 24.5C69.3639 24.5 69.5839 24.4733 69.7839 24.42C69.9972 24.3533 70.1772 24.26 70.3239 24.14C70.4839 24.02 70.6039 23.88 70.6839 23.72C70.7639 23.5467 70.8039 23.36 70.8039 23.16C70.8039 22.8133 70.6772 22.5333 70.4239 22.32C70.2906 22.2267 70.0772 22.1267 69.7839 22.02C69.5039 21.9 69.1372 21.78 68.6839 21.66C67.9106 21.46 67.2772 21.2333 66.7839 20.98C66.2906 20.7267 65.9106 20.44 65.6439 20.12C65.4439 19.8667 65.2972 19.5933 65.2039 19.3C65.1106 18.9933 65.0639 18.66 65.0639 18.3C65.0639 17.86 65.1572 17.46 65.3439 17.1C65.5439 16.7267 65.8106 16.4067 66.1439 16.14C66.4906 15.86 66.8906 15.6467 67.3439 15.5C67.8106 15.3533 68.3039 15.28 68.8239 15.28C69.3172 15.28 69.8039 15.3467 70.2839 15.48C70.7772 15.6133 71.2306 15.8067 71.6439 16.06C72.0572 16.3133 72.4039 16.6133 72.6839 16.96L71.5039 18.26C71.2506 18.0067 70.9706 17.7867 70.6639 17.6C70.3706 17.4 70.0706 17.2467 69.7639 17.14C69.4572 17.0333 69.1772 16.98 68.9239 16.98C68.6439 16.98 68.3906 17.0067 68.1639 17.06C67.9372 17.1133 67.7439 17.1933 67.5839 17.3C67.4372 17.4067 67.3239 17.54 67.2439 17.7C67.1639 17.86 67.1239 18.04 67.1239 18.24C67.1372 18.4133 67.1772 18.58 67.2439 18.74C67.3239 18.8867 67.4306 19.0133 67.5639 19.12C67.7106 19.2267 67.9306 19.34 68.2239 19.46C68.5172 19.58 68.8906 19.6933 69.3439 19.8C70.0106 19.9733 70.5572 20.1667 70.9839 20.38C71.4239 20.58 71.7706 20.8133 72.0239 21.08C72.2906 21.3333 72.4772 21.6267 72.5839 21.96C72.6906 22.2933 72.7439 22.6667 72.7439 23.08C72.7439 23.68 72.5706 24.22 72.2239 24.7C71.8906 25.1667 71.4372 25.5333 70.8639 25.8C70.2906 26.0667 69.6506 26.2 68.9439 26.2ZM76.3142 26V12.82H78.3742V26H76.3142ZM74.1342 17.5V15.5H80.8142V17.5H74.1342ZM87.4923 26.2C86.4123 26.2 85.4523 25.9733 84.6123 25.52C83.7857 25.0533 83.1323 24.42 82.6523 23.62C82.1857 22.82 81.9523 21.9 81.9523 20.86C81.9523 20.0333 82.0857 19.28 82.3523 18.6C82.619 17.92 82.9857 17.3333 83.4523 16.84C83.9323 16.3333 84.499 15.9467 85.1523 15.68C85.819 15.4 86.539 15.26 87.3123 15.26C87.9923 15.26 88.6257 15.3933 89.2123 15.66C89.799 15.9133 90.3057 16.2667 90.7323 16.72C91.1723 17.1733 91.5057 17.7133 91.7323 18.34C91.9723 18.9533 92.0857 19.6267 92.0723 20.36L92.0523 21.24H83.4723L83.0123 19.6H90.2723L89.9723 19.94V19.46C89.9323 19.02 89.7857 18.6267 89.5323 18.28C89.279 17.9333 88.959 17.66 88.5723 17.46C88.1857 17.26 87.7657 17.16 87.3123 17.16C86.5923 17.16 85.9857 17.3 85.4923 17.58C84.999 17.8467 84.6257 18.2467 84.3723 18.78C84.119 19.3 83.9923 19.9467 83.9923 20.72C83.9923 21.4533 84.1457 22.0933 84.4523 22.64C84.759 23.1733 85.1923 23.5867 85.7523 23.88C86.3123 24.1733 86.959 24.32 87.6923 24.32C88.2123 24.32 88.6923 24.2333 89.1323 24.06C89.5857 23.8867 90.0723 23.5733 90.5923 23.12L91.6323 24.58C91.3123 24.9 90.919 25.18 90.4523 25.42C89.999 25.66 89.5123 25.8533 88.9923 26C88.4857 26.1333 87.9857 26.2 87.4923 26.2ZM94.3111 26V15.5H96.3911V18.8L96.1911 18C96.3378 17.4933 96.5844 17.0333 96.9311 16.62C97.2911 16.2067 97.6978 15.88 98.1511 15.64C98.6178 15.4 99.0978 15.28 99.5911 15.28C99.8178 15.28 100.031 15.3 100.231 15.34C100.444 15.38 100.611 15.4267 100.731 15.48L100.191 17.72C100.031 17.6533 99.8511 17.6 99.6511 17.56C99.4644 17.5067 99.2778 17.48 99.0911 17.48C98.7311 17.48 98.3844 17.5533 98.0511 17.7C97.7311 17.8333 97.4444 18.0267 97.1911 18.28C96.9511 18.52 96.7578 18.8067 96.6111 19.14C96.4644 19.46 96.3911 19.8133 96.3911 20.2V26H94.3111ZM102.718 26V15.5H104.778V26H102.718ZM103.718 13.18C103.278 13.18 102.938 13.0667 102.698 12.84C102.458 12.6133 102.338 12.2933 102.338 11.88C102.338 11.4933 102.458 11.18 102.698 10.94C102.951 10.7 103.291 10.58 103.718 10.58C104.158 10.58 104.498 10.6933 104.738 10.92C104.978 11.1467 105.098 11.4667 105.098 11.88C105.098 12.2667 104.971 12.58 104.718 12.82C104.478 13.06 104.144 13.18 103.718 13.18ZM111.444 26.2C110.564 26.2 109.771 26.0467 109.064 25.74C108.357 25.4333 107.771 24.98 107.304 24.38L108.704 23.18C109.104 23.6467 109.537 23.9867 110.004 24.2C110.484 24.4 111.024 24.5 111.624 24.5C111.864 24.5 112.084 24.4733 112.284 24.42C112.497 24.3533 112.677 24.26 112.824 24.14C112.984 24.02 113.104 23.88 113.184 23.72C113.264 23.5467 113.304 23.36 113.304 23.16C113.304 22.8133 113.177 22.5333 112.924 22.32C112.791 22.2267 112.577 22.1267 112.284 22.02C112.004 21.9 111.637 21.78 111.184 21.66C110.411 21.46 109.777 21.2333 109.284 20.98C108.791 20.7267 108.411 20.44 108.144 20.12C107.944 19.8667 107.797 19.5933 107.704 19.3C107.611 18.9933 107.564 18.66 107.564 18.3C107.564 17.86 107.657 17.46 107.844 17.1C108.044 16.7267 108.311 16.4067 108.644 16.14C108.991 15.86 109.391 15.6467 109.844 15.5C110.311 15.3533 110.804 15.28 111.324 15.28C111.817 15.28 112.304 15.3467 112.784 15.48C113.277 15.6133 113.731 15.8067 114.144 16.06C114.557 16.3133 114.904 16.6133 115.184 16.96L114.004 18.26C113.751 18.0067 113.471 17.7867 113.164 17.6C112.871 17.4 112.571 17.2467 112.264 17.14C111.957 17.0333 111.677 16.98 111.424 16.98C111.144 16.98 110.891 17.0067 110.664 17.06C110.437 17.1133 110.244 17.1933 110.084 17.3C109.937 17.4067 109.824 17.54 109.744 17.7C109.664 17.86 109.624 18.04 109.624 18.24C109.637 18.4133 109.677 18.58 109.744 18.74C109.824 18.8867 109.931 19.0133 110.064 19.12C110.211 19.2267 110.431 19.34 110.724 19.46C111.017 19.58 111.391 19.6933 111.844 19.8C112.511 19.9733 113.057 20.1667 113.484 20.38C113.924 20.58 114.271 20.8133 114.524 21.08C114.791 21.3333 114.977 21.6267 115.084 21.96C115.191 22.2933 115.244 22.6667 115.244 23.08C115.244 23.68 115.071 24.22 114.724 24.7C114.391 25.1667 113.937 25.5333 113.364 25.8C112.791 26.0667 112.151 26.2 111.444 26.2ZM119.394 22.72L119.294 20.48L124.314 15.5H127.094L119.394 22.72ZM117.514 26V11.2H119.574V26H117.514ZM124.594 26L120.634 21.38L122.094 20.04L127.234 26H124.594Z"
                  fill="#111827"
                />
                <path
                  d="M28.8 0H7.2C3.22355 0 0 3.22355 0 7.2V28.8C0 32.7765 3.22355 36 7.2 36H28.8C32.7765 36 36 32.7765 36 28.8V7.2C36 3.22355 32.7765 0 28.8 0Z"
                  fill="#111827"
                />
                <path
                  d="M30.6 18C30.6 11.0412 24.9588 5.40002 18 5.40002C11.0412 5.40002 5.40002 11.0412 5.40002 18C5.40002 24.9588 11.0412 30.6 18 30.6C24.9588 30.6 30.6 24.9588 30.6 18Z"
                  fill="#F3F4F6"
                />
                <path d="M18.2354 12L24.4708 22.8H12L18.2354 12Z" fill="#111827" />
              </g>
              <defs>
                <clipPath id="clip0_356_2830">
                  <rect width="128" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="flex flex-col gap-y-7 py-8">
          <div>
            <ul>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Stack2 strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <HeartRateMonitor strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Monitoring</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="pl-8 text-xs uppercase text-gray-400">Main</span>
            <ul className="mt-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <CircleSquare strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Movies</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <CircleSquare strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">TV Shows</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Focus2 strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Genres</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Users strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Members</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="pl-8 text-xs uppercase text-gray-400">Updates</span>
            <ul className="mt-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <LayersUnion strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Doctor Strange 2</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <LayersUnion strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Better Call Saul</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <LayersUnion strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Thor: Love and Thunder</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="pl-8 text-xs uppercase text-gray-400">Realted</span>
            <ul className="mt-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Braces strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">API</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Crown strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Roles</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <BrandGithub strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Github</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <LetterM strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Maintenance</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Book2 strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Docs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Ghost strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">ToS</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2.5 py-2 px-6 transition-all hover:bg-gray-50 focus:bg-gray-100 focus:outline-none">
                  <span>
                    <Settings strokeWidth={1.5} className="text-gray-600" />
                  </span>
                  <span className="text-md text-gray-900">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="relative flex max-w-full grow flex-col" onClick={() => setHeaderOpen(false)}>
        <section className="sticky top-0 z-20 flex items-center justify-between bg-white/80 bg-dotted-pattern bg-bottom bg-repeat-x py-4 px-6 backdrop-blur-lg md:px-9 lg:py-6">
          <div className="flex items-center gap-x-3">
            <button
              onClick={(e) => {
                setHeaderOpen((headerOpen) => !headerOpen)
                e.stopPropagation()
              }}
              className="-ml-2 rounded-md p-2 text-gray-600 hover:bg-gray-50 focus:text-gray-800 lg:hidden">
              <Menu2 strokeWidth={1.5} size={22} />
            </button>
            <h5 className="font-medium text-gray-900">
              <span className="md:hidden">Movies</span>
              <span className="hidden md:inline">Welcome, Vukašin Vitorović</span>
            </h5>
          </div>
          <div className="flex items-center gap-x-9">
            <div className="hidden text-center md:block">
              <p className="text-sm text-gray-400">Role:</p>
              <p className="mt-1 text-md leading-5 text-gray-700">Editor</p>
            </div>
            <button className="rounded-full focus:ring-1 focus:ring-gray-300">
              <img
                className="h-10 w-10 rounded-full object-cover object-center"
                src="https://avatars.cloudflare.steamstatic.com/36f85e68d703bd07b32aa7773aa7cf7dd4df5ee6_full.jpg"
                alt="Avatar"
              />
            </button>
          </div>
        </section>
        <div>
          <section className="bg-white bg-opacity-50 bg-grid bg-repeat py-5 px-6 md:px-9">
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-[100px] rounded-md border border-gray-200 drop-shadow-lg 2xl:h-28"
                  src={data[0].image}
                  alt={data[0].title}
                />
              </div>
              <div className="grow items-center justify-between md:flex">
                <div>
                  <div className="text-sm leading-5 text-gray-500 md:text-md">Updating</div>
                  <h3 className="mt-2.5 w-4/5 font-medium uppercase text-gray-900 lg:w-full 2xl:text-lg">
                    {data[0].title}
                  </h3>
                  <p className="mt-2 hidden text-md leading-5 text-gray-400 md:block xl:hidden">
                    Updated at: <span className="font-medium text-gray-500">26. May 2022</span>
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <div className="hidden items-center gap-x-5 xl:flex">
                    <p className="text-md leading-5 text-gray-400">
                      Updated at: <span className="font-medium text-gray-500">26. May 2022</span>
                    </p>
                    <div className="h-0.5 w-6 rounded-full bg-gray-400"></div>
                  </div>
                  <div className="hidden flex-col gap-x-6 gap-y-3.5 md:flex xl:flex-row">
                    <button className="rounded-lg py-2.5 px-4 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-300 transition-all hover:bg-white focus:outline-none ">
                      Save as Draft
                    </button>
                    <button className="rounded-lg bg-gray-900 py-2.5 px-4 text-sm font-medium text-gray-100 transition-all hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="grid-cols-3 divide-gray-100 bg-dotted-pattern bg-top bg-repeat-x md:divide-y 2xl:grid">
            <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
              <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
                Base Information
              </div>
              <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
                <div className="rounded-full bg-gray-100 p-2">
                  <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                    <Diamond />
                  </div>
                </div>
                <h5 className="font-medium text-gray-900">Base Information</h5>
              </div>
              <div className="flex flex-col gap-y-6 px-6 py-7 pb-14 md:gap-y-7 md:px-9">
                <div>
                  <label htmlFor="title">Movie Title</label>
                  <input
                    type="text"
                    id="title"
                    className="mt-2.5 md:mt-3"
                    defaultValue={data[0].title}
                  />
                </div>
                <div>
                  <label htmlFor="tagline">Tagline</label>
                  <input
                    type="text"
                    id="tagline"
                    className="mt-2.5 md:mt-3"
                    defaultValue={data[0].tagline}
                  />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows={5}
                    className="mt-2.5 resize-none md:mt-3"
                    defaultValue={data[0].description}
                  />
                </div>
                <div>
                  <label htmlFor="release_date">Release Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="release_date"
                      defaultValue="2022-01-01"
                      className="mt-2.5 appearance-none md:mt-3"
                    />
                    <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                      <Calendar strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div>
                    <label htmlFor="runtime">Runtime</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="runtime"
                        defaultValue="87"
                        className="mt-2.5 appearance-none md:mt-3"
                      />
                      <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                        <Stars strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="rating">Rating</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="rating"
                        defaultValue="224"
                        className="mt-2.5 appearance-none md:mt-3"
                      />
                      <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                        <Clock strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="title">
                    Short Title <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="mt-2.5 md:mt-3"
                    defaultValue={data[0].title}
                  />
                </div>
              </div>
            </div>
            <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
              <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
                Torrents
              </div>
              <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
                <div className="rounded-full bg-gray-100 p-2">
                  <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                    <Dice />
                  </div>
                </div>
                <h5 className="font-medium text-gray-900">Torrents</h5>
              </div>
              <div className="flex flex-col px-6 py-7 md:px-9">
                <div>
                  <label>Available Torrents</label>
                  <div className="mt-3.5 grid gap-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                        <div>
                          <div className="flex gap-x-1.5 text-gray-800">
                            <span>0,92GB</span>
                            <span>&middot;</span>
                            <span>720P</span>
                          </div>
                          <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                            899475841c73391e1df52fdbfea0f18736489835
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Pencil strokeWidth={1.5} />
                          </button>
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Trash strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 w-3.5 bg-yellow-500"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                        <div>
                          <div className="flex gap-x-1.5 text-gray-800">
                            <span>2,73GB</span>
                            <span>&middot;</span>
                            <span>1080P</span>
                          </div>
                          <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                            9289f24a3b5fd98f6542af72a6f8cf5f5dc7b8aa
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Pencil strokeWidth={1.5} />
                          </button>
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Trash strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 w-3.5 bg-green-500"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                        <div>
                          <div className="flex gap-x-1.5 text-gray-800">
                            <span>4,62GB</span>
                            <span>&middot;</span>
                            <span>2160P</span>
                          </div>
                          <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                            d9bce5187ff43d69954b140887d33e63f8ce407e
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Pencil strokeWidth={1.5} />
                          </button>
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Trash strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 w-3.5 bg-primary-500"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
                        <div>
                          <div className="flex gap-x-1.5 text-gray-800">
                            <span>1,44GB</span>
                            <span>&middot;</span>
                            <span>3D</span>
                          </div>
                          <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
                            4ae9d49545c2b1db3c297ea010d9b9553e166e78
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Pencil strokeWidth={1.5} />
                          </button>
                          <button className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
                            <Trash strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 w-3.5 bg-blue-500"></div>
                    </div>
                  </div>
                </div>
                <button className="mt-7 flex w-full items-center justify-center gap-x-2 rounded-lg py-3 px-6 text-sm font-medium text-gray-800 ring-1 ring-gray-200 focus:outline-none focus:outline-1 focus:outline-primary-200 focus:ring-primary-300 2xl:mt-[52px]">
                  <span className="text-gray-400">
                    <CodePlus size={20} />
                  </span>
                  Add new torrent
                </button>
                <p className="mx-auto mt-7 w-full max-w-md px-4 text-center text-sm leading-6 text-gray-500 md:px-0 2xl:mx-auto 2xl:mt-9 2xl:text-left">
                  <span className="font-medium uppercase text-gray-800">Warning: </span>When adding
                  a torrent system will automatically prepare check for it's validity, it may take
                  up to 24 hours for new torrent to show up on the front.
                </p>
              </div>
            </div>
            <div className="bg-right bg-repeat-y 2xl:bg-dotted-pattern-vertical">
              <div className="sticky top-[72px] z-10 border-y border-gray-200 bg-gray-50 py-3.5 px-6 text-xs font-medium uppercase text-gray-900 md:hidden">
                Other Relations
              </div>
              <div className="hidden items-center gap-x-4 px-9 pt-5 pb-1 md:flex">
                <div className="rounded-full bg-gray-100 p-2">
                  <div className="rounded-full bg-gray-800 p-1.5 text-gray-200">
                    <Components />
                  </div>
                </div>
                <h5 className="font-medium text-gray-900">Other Relations</h5>
              </div>
              <div className="flex flex-col gap-y-6 px-6 py-7 md:gap-y-7 md:px-9">
                <div>
                  <label htmlFor="genres">Genres</label>
                  <div className="relative">
                    <input type="text" id="genres" className="mt-2.5 md:mt-3" />
                    <div className="absolute inset-y-0 left-4">
                      <div className="flex items-center gap-x-2.5 py-1.5">
                        <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                          Action
                        </div>
                        <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                          Thriller
                        </div>
                        <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                          Sci-Fi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="languages">Languages</label>
                  <div className="relative">
                    <input type="text" id="languages" className="mt-2.5 md:mt-3" />
                    <div className="absolute inset-y-0 left-4">
                      <div className="flex items-center gap-x-2.5 py-1.5">
                        <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                          English
                        </div>
                        <div className="rounded-full bg-gray-100 py-0.5 px-3 text-sm font-medium leading-6 text-gray-600">
                          Russian
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div>
                    <label htmlFor="tmdb">TMDB ID</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="tmdb"
                        defaultValue="25012351"
                        className="mt-2.5 appearance-none md:mt-3"
                      />
                      <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                        <Crown strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="imdb">
                      IMDB ID <span className="text-gray-400">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="imdb"
                        defaultValue="tt0137523"
                        className="mt-2.5 appearance-none md:mt-3"
                      />
                      <div className="absolute inset-y-0 right-3.5 flex items-center justify-center text-gray-400">
                        <Crown strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-2 block 2xl:my-4" />
                <div>
                  <p className="pr-4 text-sm leading-6 text-gray-500">
                    <span className="font-medium uppercase text-gray-800">TMDB_ID: </span>
                    This serves purpose of fetching backdrops, trailers, some reviews and other
                    media corresponding to title.
                  </p>
                  <p className="mt-5 pr-4 text-sm leading-6 text-gray-500">
                    <span className="font-medium uppercase text-gray-800">IMDB_ID: </span>
                    One and only purpose of for the rating, might consider fetching more data in the
                    future.
                  </p>
                </div>
                <div className="mt-3 flex flex-col gap-y-4 2xl:mt-4">
                  <Link to="/" className="flex items-center gap-x-3">
                    <span>
                      <Focus2 strokeWidth={1.5} className="text-gray-400" />
                    </span>
                    <div className="text-sm font-medium leading-6 text-primary-500 hover:text-primary-400">
                      View All Genres
                    </div>
                  </Link>
                  <Link to="/" className="flex items-center gap-x-3">
                    <span>
                      <Language strokeWidth={1.5} className="text-gray-400" />
                    </span>
                    <div className="text-sm font-medium leading-6 text-primary-500 hover:text-primary-400">
                      View All Languages
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
export default ProtectedRoute
