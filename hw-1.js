const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
]

// remove(17) // dosyayı silecek
const remove = (dosyaId ) => {
  folders.map((folder) => {
    if(folder.files) {
      const dosya = folder.files.filter(item => item.id === dosyaId)
       folder.files.splice(dosya)
       console.log(folder.files);
    }
  })
 
}
remove(17)

// move(17,6)  dosyayı klasöre taşıyacak
const move = (dosyaId, klasorId) => {
  folders.map((folder) => {
    if(folder.files) {
      const dosya = folder.files.filter(file => file.id === dosyaId)
      if(folder.id === klasorId) {
        folder.files.push(dosya) 
        console.log(folder);
      } 
     console.log(dosya);
    }
  })
}
// move(17,6)

// copy(18,7) // kopyasını oluşturacak
const copy = (dosyaId, klasorId) => {
 folders.map((folder)=> {
    if(folder.files) {
      const dosya = folder.files.filter(file => file.id === dosyaId)
      if(folder.id === klasorId){
        folder.files.push(dosya)
        console.log(folder);
      }
    }
  })
  
}

// copy(18,7)



// parentFolderOf(17) // ==> 5
const parentFolderOf = (dosyaId) => {
  folders.map((folder) => {
    if(folder.files && folder.files.length > 0) {
      folder.files.map((file) => {
        if(file.id === dosyaId) {
          console.log(folder.id);
        }
      })
    }
  })
}
// parentFolderOf(17)


// removeFolder(6) //klasorü ve altındaki tüm dosyaları silecek
const removeFolder =(folderId) => {
  const newFolders = folders.filter(folder =>
    folder.id !== folderId
  )
  console.log(newFolders);
}
// removeFolder(6)





