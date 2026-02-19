/**
 * Flama depende de jQuery
 */
$(function(){

    window.flama = {
        loader:null,
        /**
         * Muestra o oculta un loader spinner global
         * 
         * @param {string|false} message Mensaje opcional del loader. si es false se elimina
         * 
         * @returns {void}
         */
        loading:function(
            message
        ){
            if(this.loader == null){
                this.loader = $('<fl-loader></fl-loader>').appendTo('body');
            }
            if(message === false){
                this.loader.visible(false);
            } else {
                message = message ? message : '';
                if(message == ''){
                    this.loader.unset('message').visible();
                } else {
                    this.loader.set('message', message).visible();
                }
            }
        },
        message:function(
            options
        ){
            var settings = $.extend({}, {
                icon:false,
                title:false,
                message:false,
                actions:[]
            }, options);
            settings.actions = settings.actions.map(function(action){
                /**
                 * text: Texto de la accion,
                 * type: ''* | outline | disabled
                 * closes: boolean
                 * onClose: () => {}
                 * onPress: (index, action) => {}
                 */
                return $.extend({}, {
                    text:false,
                    type:'',
                    closes:false,
                    onPress:(index, action) => {}
                }, options)
            });
            var modal = $(`
                <fl-modal>
                    <fl-card message>
                        ` + (settings.icon ? `<img src="/img/${settings.icon}.png" />` : '') + `
                        <fl-card-body>
                            ` + (settings.title ? `<fl-card-title>${settings.title}</fl-card-title>` : '') + `
                            ` + (settings.message ? `<fl-card-message>${settings.message}</fl-card-message>` : '') + `
                        </fl-card-body>
                        <fl-buttons class="modal-actions" center></fl-button>
                    </fl-card>
                </fl-modal>
            `);
            modal.find('.modal-actions').append(
                settings.actions.map((action, index) => {
                    return $(`<fl-button small ${action.type}>${action.text}</fl-button>`).on('click', function(e){
                        e.preventDefault();
                        action.onPress(index, action);
                        if(actions.closes){
                            modal.visible(false);
                            modal.trigger('close');
                        }
                    })
                })
            );
            return modal.appendTo('body');
        },
        alert:function(
            options
        ){
            if(typeof options == 'string'){
                options = {
                    title:'Mensaje del sistema',
                    message:options
                };
            }
            var settings = $.extend({}, {
                title:false,
                icon:false,
                message:false,
                actions:[

                ]
            }, options);
        },
        init:function(){

        }
    };
    window.flama.init();

    /**
     * Muestra o oculta un elemento que soporte la propiedad visible.
     * 
     * @param {bool} visible Define si el atributo es visible o se elimina, por defecto true
     * 
     * @returns {jQuery element}
     */
    $.fn.visible = function (
        visible
    ){
        return $(this).enableProperty('visible', visible);
    };

    /**
     * Habilita o deshabilita una propiedad.
     * Solo util para propiedades sin value
     * 
     * @param {string} propertyName 
     * @param {bool}   propertyEnabled 
     * @returns 
     */
    $.fn.enableProperty = function(
        propertyName,
        propertyEnabled
    ){
        return (
            (propertyEnabled || propertyEnabled === undefined) 
            ? $(this).set(propertyName) 
            : $(this).unset(propertyName)
        );
    }

    /**
     * Elimina un atributo
     * 
     * @param {string} attr Atributo a eliminar
     * 
     * @returns {jQuery element}
     */
    $.fn.unset = function (
        attr
    ){
        return $(this).removeAttr(attr);
    };

    /**
     * Setea un atributo
     * 
     * @param {string} attr  Atributo a setear
     * @param {*}      value Valor para setear, si no se define se usa el mismo attr 
     * 
     * @returns {jQuery element}
     */
    $.fn.set = function (
        attr,
        value
    ){
        return $(this).attr(attr, value === undefined ? attr : value);
    };

})