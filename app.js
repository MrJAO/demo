document.getElementById('swap-button').addEventListener('click', function() {
    const tokenFrom = document.getElementById('token-from').value;
    const tokenTo = document.getElementById('token-to').value;
    const amountFrom = document.getElementById('amount-from').value;

    if (!amountFrom || amountFrom <= 0) {
        alert("Please enter a valid amount to swap.");
        return;
    }

    // Simulate conversion rates (e.g., 1 USDC = 0.02 SOL)
    const conversionRate = tokenFrom === "USDC" ? 0.02 : 50; // 50 USDC for 1 SOL
    const amountTo = (amountFrom * conversionRate).toFixed(4);

    document.getElementById('amount-to').value = amountTo;

    // Record the transaction in history
    const historyList = document.getElementById('history-list');
    const newTransaction = document.createElement('li');
    newTransaction.textContent = `Swapped ${amountFrom} ${tokenFrom} for ${amountTo} ${tokenTo}`;
    historyList.appendChild(newTransaction);
});
