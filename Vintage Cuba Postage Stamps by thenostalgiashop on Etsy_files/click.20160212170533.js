require(["jquery"],function(t){if(Etsy&&Etsy.Context){var e=Etsy.Context.getData("plkey",null);e&&t.post("/api/v3/ajax/member/prolist/click-log",{_nnc:Etsy.csrf_nonce,logging_key:e})}});