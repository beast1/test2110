$(function() {

    var copyEmailBtn = document.querySelector('.js-emailcopybtn');
    copyEmailBtn.addEventListener('click', function(event) {
        var emailLink = document.querySelector('.js-emaillink');
        var range = document.createRange();
        range.selectNode(emailLink);
        window.getSelection().addRange(range);

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy email command was ' + msg);
        } catch(err) {
            console.log('Oops, unable to copy');
        }
        window.getSelection().removeAllRanges();
        copyEmailBtn.innerHTML = 'Copied';
        copyEmailBtn.clagit ssList.add('promo__copy--complete');

        copyEmailBtn.addEventListener('mouseleave', function() {
            copyEmailBtn.innerHTML = 'Copy<span> code</span>';
            copyEmailBtn.classList.remove('promo__copy--complete');
        });
    });

});
