"use strict";
/// <reference types="jquery" />
Object.defineProperty(exports, "__esModule", { value: true });
function fixJQuery(target, $) {
    let _target = $(target);
    _target.filter('br').each(function () {
        _removeAttrs(this, $);
    });
    _target.find('br').each(function () {
        _removeAttrs(this, $);
    });
    return _target;
}
exports.fixJQuery = fixJQuery;
function _removeAttrs(elem, $) {
    let _self = $(elem);
    Object.keys(elem.attributes).forEach(k => _self.removeAttr(k));
    return _self;
}
exports._removeAttrs = _removeAttrs;
exports.default = fixJQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBZ0M7O0FBRWhDLFNBQWdCLFNBQVMsQ0FBbUMsTUFBUyxFQUFFLENBQWU7SUFFckYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRXpCLFlBQVksQ0FBQyxJQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFdkIsWUFBWSxDQUFDLElBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBZkQsOEJBZUM7QUFFRCxTQUFnQixZQUFZLENBQXdCLElBQU8sRUFBRSxDQUFlO0lBRTNFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0QsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDO0FBUEQsb0NBT0M7QUFFRCxrQkFBZSxTQUFTLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImpxdWVyeVwiIC8+XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXhKUXVlcnk8VCBleHRlbmRzIHVua25vd24gfCBKUXVlcnlTdGF0aWM+KHRhcmdldDogVCwgJDogSlF1ZXJ5U3RhdGljKVxue1xuXHRsZXQgX3RhcmdldCA9ICQodGFyZ2V0KTtcblxuXHRfdGFyZ2V0LmZpbHRlcignYnInKS5lYWNoKGZ1bmN0aW9uICgpXG5cdHtcblx0XHRfcmVtb3ZlQXR0cnModGhpcyBhcyBIVE1MRWxlbWVudCwgJCk7XG5cdH0pO1xuXG5cdF90YXJnZXQuZmluZCgnYnInKS5lYWNoKGZ1bmN0aW9uICgpXG5cdHtcblx0XHRfcmVtb3ZlQXR0cnModGhpcyBhcyBIVE1MRWxlbWVudCwgJCk7XG5cdH0pO1xuXG5cdHJldHVybiBfdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZUF0dHJzPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oZWxlbTogVCwgJDogSlF1ZXJ5U3RhdGljKVxue1xuXHRsZXQgX3NlbGYgPSAkKGVsZW0pO1xuXG5cdE9iamVjdC5rZXlzKGVsZW0uYXR0cmlidXRlcykuZm9yRWFjaChrID0+IF9zZWxmLnJlbW92ZUF0dHIoaykpO1xuXG5cdHJldHVybiBfc2VsZjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZml4SlF1ZXJ5XG4iXX0=