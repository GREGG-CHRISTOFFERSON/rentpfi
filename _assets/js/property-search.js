$(document).ready(function(){var a=$("#home-search").attr("action"),n=!1,o=!1;function _(){var _="";"*"!=$("#CAT_Custom_28").val()&&(_=_+"&loc="+$("#CAT_Custom_28").val()),"*"!=$("#CAT_Custom_11").val()&&(_=_+"&type="+$("#CAT_Custom_11").val()),"*"!=$("#CAT_Custom_8_Min").val()&&(_=_+"&bd="+$("#CAT_Custom_8_Min").val()),"*"!=$("#CAT_Custom_9_Min").val()&&(_=_+"&bth="+$("#CAT_Custom_9_Min").val()),n&&(_=(_=_+"&minPrice="+$("#CAT_Custom_4_Min").val())+"&maxPrice="+$("#CAT_Custom_4_Max").val()),o&&(_=(_=_+"&minArea="+$("#CAT_Custom_7_Min").val())+"&maxArea="+$("#CAT_Custom_7_Max").val()),$("#home-search").attr("action",a+_)}$("select").change(function(){_()});$("#priceRange").data("min");var e=$("#priceRange").data("max");$("#CAT_Custom_4_Min").val(0),$("#CAT_Custom_4_Max").val(e);var t=$(".range");t.ionRangeSlider({hide_min_max:!0,keyboard:!0,min:0,max:e,from:0,to:e,type:"double",step:1,prefix:"$",grid:!0,onFinish:function(a){n=!0,console.log("You changed the price"),_()}}),t.on("change",function(){var a=$(this).prop("value").split(";");$("#CAT_Custom_4_Min").val(a[0]),$("#CAT_Custom_4_Max").val(a[1])});var i=$("#areaRange").data("min"),m=$("#areaRange").data("max");$("#CAT_Custom_7_Min").val(i),$("#CAT_Custom_7_Max").val(m);var r=$(".area");r.ionRangeSlider({hide_min_max:!0,keyboard:!0,min:i,max:m,from:0,to:m,type:"double",step:1,prefix:"",grid:!0,onFinish:function(a){o=!0,console.log("You changed the area"),_()}}),r.on("change",function(){var a=$(this).prop("value").split(";");$("#CAT_Custom_7_Min").val(a[0]),$("#CAT_Custom_7_Max").val(a[1])});t.data("ionRangeSlider"),r.data("ionRangeSlider")});function checkWholeForm97013(a){return!0}