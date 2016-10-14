'use strict';

var TestModule = {
    reverse: function(args) {
        var arrayOfStrings = args.split(" ");
        var reverseArrayOfStrings = arrayOfStrings.reverse();
        var result = reverseArrayOfStrings.join(" ");

        return result;
    },

    enforceUniqueValues: function(list) {
        var result = [];
        for (var i = 0; i < list.length; i++) {
            if (result.indexOf(list[i]) == -1) {
                result.push(list[i]);
                result.sort();
            }
        }

        return result;
    },

    flatten: function(list) {
        function recurse(innerList) {
            var result = [];
            for (var i = 0; i < innerList.length; i++) {
                if (Array.isArray(list[i])) {
                    result = result.concat(recurse(innerList[i]));
                }
                else {
                    result.push(innerList[i]);
                }
            }
            return result;
        }
        var result = recurse(list);

        return result;
    },

    areStringsAnagrams: function(str1, str2) {
        var result = true;
        var str1Array = str1.split(" ");
        var str2Array = str2.split(" ");
        for (var i = 0; i < str1Array.length; i++) {
            if (str2Array.indexOf(str1Array[i]) == -1) {
                result = false;
            }
        }

        return result;
    },

    emailContainsLettersAndNumbers: function(address) {
        var containsAlpha = /\w/.test(address);
        var containsNum = /\d/.test(address);
        var result = (containsAlpha && containsNum);

        return result;
    }
};

module.exports = TestModule;
