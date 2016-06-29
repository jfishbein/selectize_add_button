/**
 * Plugin: "add_button" (selectize.js)
 * Copyright (c) 2016 Jonathan Fishbein
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Jonathan Fishbein <jfishbein@gmail.com>
 */
Selectize.define('enhanced_selection', function() {
    var self = this;
    self.require('remove_button');

    if (this.settings.mode === 'single') return;

    options = $.extend({
        label: '+',
        title: 'Add',
        className: 'add',
        append: true,
        cond: true
    }, options);

    var self = this;
    var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';

    /**
     * Appends an element as a child (with raw HTML).
     *
     * @param {string} html_container
     * @param {string} html_element
     * @return {string}
     */
    var append = function(html_container, html_element) {
        html_container = html_container.replace('class="item"', 'class="item item-add"')
        var pos = html_container.search(/(<\/[^>]+>\s*)$/);
        return html_container.substring(0, pos) + html_element + html_container.substring(pos);
    };

    this.setup = (function() {
        var original = self.setup;
        return function() {
            // override the item rendering method to add the button to each
            if (options.append) {
                var render_item = self.settings.render.item;
                self.settings.render.item = function(data) {
                    if (options.cond === true || (typeof options.cond === "function" && options.cond.call(this, data))) {
                        return append(render_item.apply(this, arguments), html);
                    } else {
                        return render_item.apply(this, arguments);
                    }
                };
            }

            original.apply(this, arguments);

            // add event listener
            this.$control.on('click', '.' + options.className, function(e) {
                e.preventDefault();
                if (self.isLocked) return;

                var $item = $(e.currentTarget).parent();
                self.setActiveItem($item);
                if (typeof options.func === "function") {
                    options.func.call(self, $item);
                }
                var $option = $item.find('.' + options.className);
                $option.html("&#10003;"); //checkmark glyph
                $option.removeClass(options.className);
                $option.addClass(options.className + "ed");

            });

        };
    })();

});
