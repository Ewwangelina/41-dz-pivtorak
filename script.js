function increaseCounter(emojiId) {
    var counterElement = document.getElementById('counter_' + emojiId);
    var currentCount = parseInt(counterElement.innerHTML);
    counterElement.innerHTML = currentCount + 1;
}

function showResults() {
    var emojiElements = document.getElementsByClassName('emoji');
    var counters = {};
    
        for (var i = 0; i < emojiElements.length; i++) {
        var emojiElement = emojiElements[i];
        var emojiId = emojiElement.getAttribute('data-emoji-id');
        var counterElement = document.getElementById('counter_' + emojiId);
        var counterValue = parseInt(counterElement.innerHTML);
        counters[emojiId] = counterValue;
    }
    
       var maxVotes = 0;
    var winningEmojiId = null;
    
    for (var emojiId in counters) {
        if (counters.hasOwnProperty(emojiId)) {
            var votes = counters[emojiId];
            
            if (votes > maxVotes) {
                maxVotes = votes;
                winningEmojiId = emojiId;
            }
        }
    }
    
    var winningEmojiElement = document.getElementById('emoji_' + winningEmojiId);
    var winningEmoji = winningEmojiElement.innerHTML;
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'The winning emoji is: ' + winningEmoji;
}