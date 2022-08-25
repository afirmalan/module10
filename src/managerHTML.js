function managerHTML(manager){
    return ` <div class="col-sm-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <ul class="list-group">
                <li class="list-group-item">${manager.name}</li>
                <li class="list-group-item">${manager.id}</li>
                <li class="list-group-item">${manager.email}</li>
                <li class="list-group-item">${manager.officeNumber}</li>

            </ul>
        </div>
    </div>
</div>`
}

module.exports=managerHTML