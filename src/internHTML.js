function internHTML(intern){
    return ` <div class="col-sm-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <ul class="list-group">
                <li class="list-group-item">${intern.name}</li>
                <li class="list-group-item">${intern.id}</li>
                <li class="list-group-item">${intern.email}</li>
                <li class="list-group-item">${intern.school}</li>

            </ul>
        </div>
    </div>
</div>`
}

module.exports=internHTML