module.exports = {
    posts: [
        {
            id: "sajdhkajhdkjsahdhj",
            name: "TESTE",
            description: "teste para visualização",
        },
    ],

    // Para verificar se o array está vazio!
    isEmpty() {
        if (this.posts.length == 0) {
            return true;
        } else {
            return false;
        }
    },

    getAll() {
        return JSON.stringify(this.posts);
    },

    newPost(name, description) {
        this.posts.push({ id: this.generateId(), name, description });
    },

    deletePost(id) {
        this.posts.forEach((element) => {
            if (element.id == id) {
                this.posts.splice(this.posts.indexOf(element), 1);
            } else {
                console.log("não encontrado!");
            }
        });
    },

    generateId() {
        // substring usada para não pegara as primeira 2 letras
        return Math.random().toString(36).substring(2, 9);
    },
};
