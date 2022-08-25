function engineerHTML(engineer){
    return ` <div class="col-sm-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <ul class="list-group">
                <li class="list-group-item">${engineer.name}</li>
                <li class="list-group-item">${engineer.id}</li>
                <li class="list-group-item">${engineer.email}</li>
                <li class="list-group-item">${engineer.officeNumber}</li>

            </ul>
        </div>
    </div>
</div>`
}

module.exports=engineerHTML