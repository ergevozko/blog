/**
  RG BreakPointsJQ - A simple way to detect media orientation change in your jQuery javascripts
  @version v1.0.0
  @author Me
**/
!function(t){"use strict";function e(){var n=window.getComputedStyle(document.body,":after").getPropertyValue("content");return'"'===n.charAt(0)&&(n=n.substring(1,n.length-1)),n}function n(){var n=e();n!==r&&(t(document).trigger("breakpointchange",[n]),r=n)}var r=null;t.fn.getBreakpoint=function(){return e()||null},t(function(){t(window).on("load orientationchange resize",n).trigger("resize")})}(jQuery);
