import { useState } from 'react'
import { Pencil, Trash } from 'tabler-icons-react'
import UpdateNewTorrent from '../../pages/Modals/UpdateNewTorrent'
import DeleteNewTorrent from '../../pages/Modals/DeleteNewTorrent'
import { toMemory } from '../../helpers/toMemory'

const torrentQualityMap = {
  '3D': 'bg-blue-500',
  '1080P': 'bg-green-500',
  '720P': 'bg-yellow-500',
  '2160P': 'bg-indigo-500'
}

const NewTorrent = ({
  torrent,
  handleDeleteTorrent,
  handleEditTorrent,
  torrentQuality,
  setTorrentQuality,
  hash,
  setHash,
  magnetURL,
  setMagnetURL,
  size,
  setSize,
  fps,
  setFps,
  handleClearInputs
}) => {
  const [updateTorrent, setUpdateTorrent] = useState(false)
  const [deleteTorrent, setDeleteTorrent] = useState(false)

  return (
    <>
      <UpdateNewTorrent
        torrent={torrent}
        isOpen={updateTorrent}
        setIsOpen={setUpdateTorrent}
        handleEditTorrent={handleEditTorrent}
        torrentQuality={torrentQuality}
        setTorrentQuality={setTorrentQuality}
        hash={hash}
        setHash={setHash}
        magnetURL={magnetURL}
        setMagnetURL={setMagnetURL}
        size={size}
        setSize={setSize}
        fps={fps}
        setFps={setFps}
        handleClearInputs={handleClearInputs}
      />
      <DeleteNewTorrent
        torrent={torrent}
        isOpen={deleteTorrent}
        setIsOpen={setDeleteTorrent}
        handleDeleteTorrent={handleDeleteTorrent}
      />

      <div className="relative overflow-hidden rounded-lg">
        <div className="flex items-center justify-between gap-x-8 rounded-lg border border-gray-200 py-3 pr-4 pl-8">
          <div>
            <div className="flex gap-x-1.5 text-gray-800">
              <span>{toMemory(torrent.size)}</span>
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

export default NewTorrent
