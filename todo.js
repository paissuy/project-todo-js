const input = document.getElementById('input-text');
const tambah = document.getElementById('btn-tambah');
const tempatlist = document.getElementById('list-item');

tambah.addEventListener('click', () => {
    const tugas = input.value;
    const selesai = document.createElement('button');
    const hapus = document.createElement('button')
    
    if (tugas !== "") {
        const list =  document.createElement('li');
        
        list.innerText = tugas;
        tempatlist.append(list);
        
        selesai.innerText ='✅';
        list.append(selesai);

        hapus.innerText ='❌'
        list.append(hapus)

        input.value ="";

        selesai.addEventListener('click', () => {
        list.style.textDecoration = 'line-through'
        
    })
        hapus.addEventListener('click', () => {
            list.remove()
        })
    };
        
    
    
})