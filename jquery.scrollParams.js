(function ($) {
    $.fn.scrollParams = function () {
        var test = {
            window: $(window),
            document: $(document),
            docEl: $(document.documentElement),
            html: $("html"),
            body: $(document.body)
        };


        return function () {

            var scrollbars = {
                vertical: {
                    width: 0,
                    visible: false,
                    _test: Number.MAX_VALUE
                },
                horizontal: {
                    width: 0,
                    visible: false,
                    _test: Number.MAX_VALUE
                }
            };

            for (var prop in test) {
                scrollbars.horizontal.visible |= test[prop].width() > scrollbars.horizontal._test;
                scrollbars.horizontal._test = test[prop].width();
            }

            for (var prop in test) {
                scrollbars.vertical.visible |= test[prop].height() > scrollbars.vertical._test;
                scrollbars.vertical._test = test[prop].height();
            }


            var docStyle = document.documentElement.style;

            var oldStyle = function () {
                cStyle = window.getComputedStyle(document.documentElement);
                return {
                    overflow: cStyle["overflow"],
                    overflowX: cStyle["overflow-x"],
                    overflowY: cStyle["overflow-y"]
                }
            } ();

            docStyle.overflowY = "hidden";
            scrollbars.horizontal.width = document.documentElement.clientWidth;
            docStyle.overflowY = "scroll";
            scrollbars.horizontal.width -= document.documentElement.clientWidth;
            docStyle.overflow = oldStyle.overflow;
            docStyle.overflowY = oldStyle.overflowY;
            docStyle.overflowX = oldStyle.overflowX;


            docStyle.overflowX = "hidden";
            scrollbars.vertical.width = document.documentElement.clientHeight;
            docStyle.overflowX = "scroll";
            scrollbars.vertical.width -= document.documentElement.clientHeight;
            docStyle.overflow = oldStyle.overflow;
            docStyle.overflowY = oldStyle.overflowY;
            docStyle.overflowX = oldStyle.overflowX;

            return scrollbars;
        } ();
    };

    $.scrollParams = function () { return $("<div>").scrollParams(); };

})(jQuery)