(function() {
    'use strict';

    var betterGoogleRow = function(el) {
        var byrV5b = el.querySelectorAll('.byrV5b');
        var aboutResult = el.querySelectorAll('.csDOgf');

        if (byrV5b.length > 0) {
            var linkEl = el.querySelector('a');
            var addEl = linkEl.nextSibling;

            var betterAddEl = document.createElement('div');
            betterAddEl.className = 'btrAdd';

            if (addEl) {
                for (var i = 0; i < addEl.children.length; i++) {
                    var _el = addEl.children[i];
                    if (_el.className.indexOf('byrV5b') == -1) {
                        betterAddEl.appendChild(_el);
                    }
                }
            }

            var betterEl = document.createElement('div');
            betterEl.className = 'btrG';
            betterEl.appendChild(betterAddEl);

            el.appendChild(betterEl);

            var urlEl = document.createElement('a');
            urlEl.href = linkEl.href;
            urlEl.target = '_blank';
            urlEl.className = 'btrLink';

            var urlCiteEl = document.createElement('cite');
            urlCiteEl.innerText = linkEl.href;
            urlCiteEl.className = 'iUh30 bc';
            urlEl.appendChild(urlCiteEl);

            var maxWidth = el.clientWidth - betterAddEl.offsetWidth - 10;

            betterEl.insertBefore(urlEl, betterAddEl);
            if (urlEl.offsetWidth > maxWidth) {
                urlEl.style.width = maxWidth.toString() + 'px';
            }

            if(aboutResult[0]){
                betterEl.appendChild(aboutResult[0]);
            }

            byrV5b.forEach(function(el) { el.remove() });
            linkEl.querySelector('br:first-child').remove();

            el.querySelector('.HGLrXd').remove();
        }
    }

    var prevResultCount = 0;
    var bettered = false;

    var runBetterGoogle = function() {
        if (prevResultCount != document.querySelectorAll('.g .yuRUbf').length) {
            document.querySelectorAll('.g .yuRUbf').forEach(betterGoogleRow);
            prevResultCount = document.querySelectorAll('.g .yuRUbf').length;
        }
        if ( !bettered ) {
            if ( MutationObserver != undefined ) {
                var searchEl = document.getElementById('rcnt');
                var observer = new MutationObserver(runBetterGoogle);
                observer.observe(searchEl, {childList: true, subtree: true});
            }
            bettered = true;
        }
    };

    var prepareStyleSheet = function() {
        var style = document.createElement('style');
        style.setAttribute('media', 'screen');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        style.sheet.insertRule('.btrG { display: flex; word-break: break-all; line-height: 18px; }');
        style.sheet.insertRule('.btrG .btrAdd { display: inline-block; vertical-align: top; }');
        style.sheet.insertRule('.btrG .btrLink { display: flex; flex-direction: row; vertical-align: top; line-height: 18px; text-decoration: none !important; max-width: 570px;}');
        style.sheet.insertRule('.btrG .btrLink cite.iUh30 { color: #006621; font-size: 16px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}');
        style.sheet.insertRule('.csDOgf.L48a4c { margin-top: 0px !important; }');
        style.sheet.insertRule('.srKDX:has( > .kb0PBd.cvP2Ce.LnCrMe) .btrG .btrLink { max-width: 510px !important;}');
        style.sheet.insertRule('.tF2Cxc.asEBEc { margin-bottom: 10px !important;}');
    };

    var checkElementThenRun = function(selector, func) {
        var el = document.querySelector(selector);
        if ( el == null ) {
            if (window.requestAnimationFrame != undefined) {
                window.requestAnimationFrame(function(){ checkElementThenRun(selector, func)});
            } else {
                document.addEventListener('readystatechange', function(e) {
                    if (document.readyState == 'complete') {
                        func();
                    }
                });
            }
        } else {
            func();
        }
    }

    checkElementThenRun('head', prepareStyleSheet);
    checkElementThenRun('#rcnt', runBetterGoogle);
})();