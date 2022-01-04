const newNote = document.querySelector("#note")
const addBtn = document.querySelector(".add-note")
const notesSection = document.querySelector(".notes-container")
const body = document.querySelector("body")
const viewSection = document.querySelector(".view-section")
const headerContainer = document.querySelector(".header-container")

addBtn.addEventListener("click", function(){
    const note = newNote.value
    const noteDiv = document.createElement("div")
    const viewNote = document.createElement("button")
    const removeNote = document.createElement("button")
    viewNote.innerHTML = "view note"
    removeNote.innerHTML = "remove"
    noteDiv.innerHTML = `
    <div class="card">
    <div class="note-container">${note}</div>
    </div>
    `
    newNote.value = ""
    noteDiv.append(viewNote)
    noteDiv.append(removeNote)
    notesSection.append(noteDiv)
    viewNote.classList.add("note-btn")
    removeNote.classList.add("note-btn")

    removeNote.addEventListener("click", function(){
        noteDiv.style.display = "none"
        headerContainer.classList.remove("opacity")
        
        noteDiv.classList.remove("view")
        backBtn.style.display = "none"
    })
 
    viewNote.addEventListener("click", function(){
        var backBtn = document.createElement("button")
        const viewCard = document.createElement("div")
        viewCard.innerHTML = `${note}`
        viewCard.classList.add("view-card")
        body.append(viewCard)
        backBtn.innerHTML = "back"
        backBtn.classList.add("note-btn", "back-btn")
        body.append(backBtn)
        headerContainer.classList.add("opacity")
        notesSection.classList.add("hidden")
        
        
            
        
        backBtn.addEventListener("click", function(){
            headerContainer.classList.remove("opacity")
            viewCard.style.display= "none"
            backBtn.style.display = "none"
            notesSection.classList.remove("hidden")
        })
    })


})

