var revisions1 = (function () {
    "use strict";

    console.log("hello simplon !");

    var user = {
        name: null,
        age: null,
        hobbies: [],
        password: "OvO&JFK@LHO19_68"
    };

    function getUser() {
        return {
            name: user.name,
            age: user.age,
            hobbies: user.hobbies
        };
    }

    function setAge(a) {
        user.age = a;
    }

    function setHobbie(h) {
        user.hobbies.push(h);
    }

    function setName(n) {
        user.name = n;
    }

    window.onload = function() {
        console.log("document chargé à 100%");
        console.log("----------------------");
        var list = document.getElementById("todo_list");
        console.log("objet représentant la liste => ");
        console.log(list);
        console.log("enfants (children) de la liste => ");
        console.log(list.children);
    };

    return {
        getUser: getUser,
        setAge: setAge,
        setName: setName,
        setHobbie: setHobbie
    };

}());
