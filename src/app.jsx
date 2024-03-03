import { animations } from '@formkit/drag-and-drop'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'

export default function App() {
  const [source, items] = useDragAndDrop(['dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt', 'shell32.dll', 'README.txt'], {
    group: 'A',
    plugins: [animations()],
  })

  const [source2, items2] = useDragAndDrop(['dungeon_master.exe'], {
    group: 'A',
  })

  const [source3, items3] = useDragAndDrop(['dungeon_master.exe', 'dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt'], {
    group: 'A',
  })

  return (
    <div className="flex gap-8 justify-center">
      <ul ref={source} className="bg-gray-500 size-96 flex flex-wrap overflow-y-auto">
        {items.map(item => (
          <li key={item} className="size-24 bg-yellow-500 rounded-full cursor-move">{item}</li>
        ))}
      </ul>
      <ul ref={source2} className="bg-gray-500 size-96 flex flex-wrap overflow-y-auto">
        {items2.map(item => (
          <li key={item} className="size-24 bg-blue-500 rounded-full cursor-move">{item}</li>
        ))}
      </ul>

      <ul ref={source3} className="bg-gray-500 size-96 flex flex-wrap overflow-y-auto">
        {items3.map(item => (
          <li key={item} className="size-24 bg-blue-500 rounded-full cursor-move">{item}</li>
        ))}
      </ul>
    </div>
  )
}
