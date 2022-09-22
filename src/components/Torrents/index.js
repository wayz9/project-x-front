import { useState } from 'react'
import { Pencil, Trash } from 'tabler-icons-react'
import UpdateTorrent from '../../pages/Modals/UpdateTorrent'
import DeleteTorrent from '../../pages/Modals/DeleteTorrent'

const torrentQualityMap = {
  '3D': 'bg-blue-500',
  '1080P': 'bg-green-500',
  '720P': 'bg-yellow-500',
  '2160P': 'bg-indigo-500'
}

const Torrent = ({ torrent }) => {
  const [updateTorrent, setUpdateTorrent] = useState(false)
  const [deleteTorrent, setDeleteTorrent] = useState(false)

  return (
    <>
      <UpdateTorrent torrent={torrent} isOpen={updateTorrent} setIsOpen={setUpdateTorrent} />
      <DeleteTorrent torrent={torrent} isOpen={deleteTorrent} setIsOpen={setDeleteTorrent} />

      <div className="relative overflow-hidden rounded-lg">
        <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
          <div>
            <div className="flex gap-x-1.5 text-gray-800">
              <span>{torrent.converted_size}</span>
              <span>&middot;</span>
              <span>{torrent.quality}</span>
              {torrent.fps ? (
                <>
                  <span className="hidden md:inline">&middot;</span>
                  <span className="hidden md:inline">{torrent.fps} FPS</span>
                </>
              ) : null}
            </div>
            <p className="overflow-anywhere mt-1 text-sm text-gray-400 line-clamp-1">
              {torrent.hash ? torrent.hash : 'No hash found'}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              onClick={() => setUpdateTorrent(true)}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
              <Pencil strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setDeleteTorrent(true)}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-50 focus:text-gray-600">
              <Trash strokeWidth={1.5} />
            </button>
          </div>
        </div>
        <div className={`absolute inset-y-0 w-3.5 ${torrentQualityMap[torrent.quality]}`}></div>
      </div>
    </>
  )
}

export default Torrent
