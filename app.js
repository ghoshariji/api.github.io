function show() {
    let input = document.getElementById("exampleFormControlInput1").value;
    let f1 = document.getElementById("follower");
    let f2 = document.getElementById("following");
    let img = document.getElementById("showimg");

    fetch(`https://api.github.com/users/${input}`)
        .then(res => res.json())
        .then(data => {
            f1.innerText = data.followers;
            f2.innerText =data.following;
            img.src = data.avatar_url;
            return fetch(`https://api.github.com/users/${input}/repos`);
        }).then((data)=>{
            return data.json();
        }).then((res)=>{
            const repoList = document.getElementById("repos");

            res.forEach((repo)=>{
                const listItem = document.createElement("li");
                listItem.textContent = repo.name;
                repoList.appendChild(listItem);
            })
            

        })
        .catch(err => {
            console.error("Error:", err);
        });
}


document.getElementById("btn").addEventListener("click", show);


