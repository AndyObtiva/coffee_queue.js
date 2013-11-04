class CoffeeQueue.MainIndexView extends Batman.View
  constructor: ->
    super
    @set('orders', CoffeeQueue.Order.get('all'))
    @refresh()

  @accessor 'products', ->
    CoffeeQueue.Product.get('all')

  requestCoffee: ->
    @get('order').save (err) => #change to @order if plausible
      if err && err.status == 200
        @get('orders').add(@order) #change to @order if plausible
        @refresh()

  refresh: ->
    @set('order', new CoffeeQueue.Order())
    @refresh_product_options()

  refresh_product_options: ->
    console.log @get('order')
    console.log @get('order').get('product')
#    @get('order').get('product').fetchFromRemote (err, product) =>
#      console.log err
#      console.log product
    @set('product_options', [{name: 'No Options'}])
#    @get('order').get('product').load (err, product) =>
#      console.log err
#      console.log product
#      if !err
#        console.log product
#        product_options = product && product.get('product_options')
#        console.log product_options
#        no_options = [{name: 'No Options'}]
#        @set('product_options', product_options || no_options)
