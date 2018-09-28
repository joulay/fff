$(document).ready(function() {

    function ProfileItem(employeeJson, id) {
        this.id = id;
        this.name = employeeJson[id].name;
        this.description = employeeJson[id].description;
        this.url = employeeJson[id].url;

        this.generateHtml = function() {
            return `
                <div class="employee-card">
                    <img class="profile-image" src="${this.url}" alt="${this.name}"/>
                    <div class="name">${this.name}</div>
                    <div class="description">${this.description} </div>
                </div>
            `;
        }
    } 

    //define the engine
    function ProfileEngine(employeeJson) {
        this.employeeJson = employeeJson;
        this.item1; 
        this.item2;
        this.item3; 

        this.hasItem = function () {
            return this.item1 || this.item2 || this.item3;
        }

        // adds item
        this.addItem = function (id) {
            this.item3 = this.item2; 
            this.item2 = this.item1; 
            this.item1 = new ProfileItem(this.employeeJson, id); // { id: 'emp1', name: 'phyllis', description 'salesman' };
        }

        // renders all items
        this.render = function() {
            // <section class="profile-row"></section>
            // <section class="row-employee" id="pos1">employee1</section>
            $('#pos1').html(this.item1.generateHtml());
            if (this.item2) {
                $('#pos2').html(this.item2.generateHtml());
            }
            if (this.item3) {
                $('#pos3').html(this.item3.generateHtml());
            }
        }
    };

    const renderAvatars = function(employeeJson) {
        const avatarHtml = Object.keys(employeeJson).map((id) => { // [ '<li>...</li>', '<li>....]
            const employee = employeeJson[id];
            return `<li><img src="${employee.url}" alt="${employee.name}" class="emp-img" id="${id}" /><li>`;
        }).join('');
        $('.employee-list').html(avatarHtml);
    }

    //create engine
    const profileEngine = new ProfileEngine(EmployeeJson); // { item1: undefined, item2: undefined, item3: undefined } (.hasItem , .addItem, .render methods)
    //use engine
    renderAvatars(EmployeeJson);

    $('.employee-list').on('click', function(e) {
        if(!profileEngine.hasItem()) {
            $('.profile-row').toggleClass('row--show');
        }
        profileEngine.addItem(e.target.id);
        profileEngine.render();

    });
});
