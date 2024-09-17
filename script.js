const body = document.querySelector("body");
        const darkmode = document.querySelector(".darkmode");
        const dot = document.querySelector(".dot");
        let startTime;
        let endTime;
    
        function enableDarkMode() {
            let isDarkMode = false;
    
            dot.addEventListener("click", function () {
                if (isDarkMode) {
                    body.style.backgroundColor = ""; // or any original color
                    darkmode.style.justifyContent = "flex-start"; // or any original value
                } else {
                    body.style.backgroundColor = "black";
                    darkmode.style.justifyContent = "flex-end";
                }
                isDarkMode = !isDarkMode;
            });
        }
    
        enableDarkMode();
    
        const para1 = "In a quiet corner of the city, the old bookstore was a haven for readers. The scent of aged paper and the soft rustling of pages created a calming atmosphere. Shelves were lined with literary classics and forgotten gems. Every weekend, avid readers gathered for lively discussions about their latest reads.";

        const para2 = "Technology has revolutionized how we communicate, work, and entertain ourselves. Smartphones and social media have changed our daily lives.";

        const para3 = "The beauty of nature often reveals itself in unexpected places. A walk through a serene forest might unveil hidden streams and vibrant wildflowers.";

        const para4 = "Culinary traditions vary widely across cultures, each with a unique cooking perspective. In Italy, fresh ingredients and simple dishes like pasta are emphasized. In Japan, precision in sushi and tempura preparation is key. Exploring various cuisines offers insights into cultural values and history.";

        const para5 = "In the heart of the city, a quaint café provided a serene escape from the chaos. The aroma of freshly brewed coffee and the soft hum of conversation created a warm atmosphere. Patrons enjoyed a peaceful respite from their busy lives. It was a place where time seemed to slow down.";
    

        const allPara = [para1, para2, para3, para4, para5];
        const showPara = document.querySelector(".showPara");
    
        function randomParagraph() {
            const randomIndex = Math.floor(Math.random() * allPara.length);
            return allPara[randomIndex];
        }
    
        document.querySelector("#start").addEventListener("click", function () {
            showPara.textContent = randomParagraph(); // Show a random paragraph
            startTime = new Date(); // Record start time
            document.querySelector("#input").value = ""; // Clear the input field
            document.querySelector("#input").focus(); // Focus on the input field
        });
    
        document.querySelector("#result").addEventListener("click", function () {
            endTime = new Date(); // Record end time
            let userInput = document.querySelector("#input").value.trim();
            let referenceParagraph = showPara.textContent.trim();
    
            if (userInput === "") {
                // User hasn't typed anything
                alert("Please write a paragraph before showing the result.");
                return;
            }
    
            if (userInput.split(' ').length < referenceParagraph.split(' ').length) {
                // User hasn't completed the paragraph
                alert("Please complete the paragraph before showing the result.");
                return;
            }
    
            let refWords = referenceParagraph.split(' ');
            let userWords = userInput.split(' ');
    
            let mistakes = 0;
            let maxLength = Math.max(refWords.length, userWords.length);
    
            for (let i = 0; i < maxLength; i++) {
                if (refWords[i] !== userWords[i]) {
                    mistakes++;
                }
            }
    
            if (userWords.length > refWords.length) {
                mistakes += userWords.length - refWords.length;
            }
    
            let timeTaken = (endTime - startTime) / 60000; // Time in minutes
            let wordCount = userWords.length;
    
            let wpm = (wordCount / timeTaken).toFixed(2); // Calculate WPM
    
            document.querySelector("#result").textContent = `Number of mistakes: ${mistakes} | Words Per Minute: ${wpm}`;
        });