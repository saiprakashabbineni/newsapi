var i = 0;
        var images = [
            "https://buffer.com/library/content/images/2023/10/free-images.jpg",
            "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
            "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
        ];
        var time = 3000;

        function changeImage() {
            document.getElementById("slide").src = images[i];

            if (i < images.length -1) {
                i++;
            } else {
                i = 0;
            }

            setTimeout(changeImage, time);
        }

        window.onload = changeImage;