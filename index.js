document.querySelectorAll('.circle').forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage);
});