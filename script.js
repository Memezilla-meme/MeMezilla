unction showRandomMeme() {
    const memes = [
        "🚀 Memezilla to the MOON! HODL or be eaten! 🦖",
        "😺 Forget Pepe, Memezilla is the new meme king! 👑",
        "🐶 Doge ran, but Memezilla ROARS! 🔥",
        "💥 Memezilla just yeeted a rug pull into orbit! 🌌",
        "🦍 Whale wallets tremble when Memezilla stomps! 💪"
    ];
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    alert(randomMeme);
}