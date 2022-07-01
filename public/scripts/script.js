document.addEventListener("DOMContentLoaded", () => {
    updatePost();
});

function newPost() {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    let post = { name, description };

    let options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post),
    };

    if (testPost(post)) {
        fetch("http://localhost:3212/posts/new", options).then((res) => {
            updatePost();
            document.getElementById("name").value = "";
            document.getElementById("description").value = "";
        });
    } else {
        alert("Digite corretamente as informações!");
    }
}

function testPost(post) {
    if (!post.name || !post.description) {
        return false;
    } else {
        return true;
    }
}

function deletar(element) {
    let id = { id: element.id };

    let options = {
        method: "DELETE",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(id),
    };

    fetch("http://localhost:3212/posts/delete", options).then((res) => {
        setTimeout(() => {
            updatePost();
        }, 5);
    });
}

function updatePost() {
    fetch("http://localhost:3212/posts/all")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            let postElements = "";

            let response = JSON.parse(res);

            response.forEach((element) => {
                let postElement = `
                <div id="${element.id}" class="card mb-5">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.description}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-danger" type="button" onclick="deletar(${element.id})">Deletar</button>
                        </div>
                    </div>
                </div>`;
                postElements += postElement;
            });
            document.getElementById("posts").innerHTML = postElements;
        });
}
