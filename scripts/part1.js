        function task1() {
            let name = 'Alikhan', group = 'SE-2431';
            const message = 'Hello, JavaScript World!';
            console.log(`Hello, I am ${name} from ${group}`);
            alert(message);
        }
        
        function task2() {
            let string = 'Hello, JavaScript World!', number = 2025, boolean = true;
            let sum = ((number + 25)/50)*100-1;
            console.log(sum);
            let newString = string + ' The result is: ' + sum;
            console.log(newString);
            alert("task 2 executed, check the console");
        }

        function changeParagraph() {
            const header = document.getElementById("js-header");
            if (header.innerHTML === "Java Script") {
            header.innerHTML = "Java Script is funny!";
            }
            else {header.innerHTML = "Java Script"}
        }

        function changeBackgroundColor() {
            let container = document.querySelector(".container");
            console.log(container.style.backgroundColor);
            container.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(2)})`;
        }

        function changeFontSize() {
            let text = document.querySelector(".text");
            if (text.style.fontSize === "initial") {
                text.style.fontSize = "24px";
            }
            else {text.style.fontSize = "initial"}
        }

        
        listItems = [];

        function addListItem() {
            listItems.forEach(listItem => {
                const li = document.createElement("li");
                li.textContent = listItem;
                if (!document.querySelector(".list").innerHTML.includes(listItem)) {
                document.querySelector(".list").appendChild(li);
            }
            });
        }

        function removeListItem() {
            listItems.pop();
            const list = document.querySelector(".list");
            list.removeChild(list.lastElementChild);
        }
        
        const box = document.getElementById("box");

        box.addEventListener("mouseover", function () {
            box.style.backgroundColor = "lightgreen";
        });

        box.addEventListener("mouseout", function () {
            box.style.backgroundColor = "lightblue";
        });
        const input = document.getElementById("text-input");
        const display = document.getElementById("display");

        input.addEventListener("keyup", function () {
            display.textContent = input.value;
        });