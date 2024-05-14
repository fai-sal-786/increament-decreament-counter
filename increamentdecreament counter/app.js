let count = 0;
        const counter = document.getElementById('counter');
        const historyDiv = document.getElementById('history');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        const resetBtn = document.getElementById('reset');

        function updateCounter() {
            counter.textContent = count;
            counter.className = count % 2 === 0 ? 'even' : 'odd';
        }

        function addToHistory(value) {
            const historyItem = document.createElement('div');
            historyItem.textContent = value;
            historyDiv.appendChild(historyItem);
        }

        incrementBtn.addEventListener('click', () => {
            count++;
            updateCounter();
            addToHistory(count);
        });

        decrementBtn.addEventListener('click', () => {
            if (count > 0) {
                count--;
                updateCounter();
                addToHistory(count);
            }
        });

        resetBtn.addEventListener('click', () => {
            count = 0;
            updateCounter();
            historyDiv.innerHTML = 'History:';
        });