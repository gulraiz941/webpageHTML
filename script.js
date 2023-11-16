document.getElementById('search-button').addEventListener('click', function() {
    var searchQuery = document.getElementById('search-input').value;
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
    var resultsContainer = document.getElementById('results-container');
    
    resultsContainer.innerHTML = '<iframe src="' + url + '"></iframe>';
});
