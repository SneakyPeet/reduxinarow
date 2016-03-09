const routeBase = '/react/'
const suppliers = 'suppliers'

module.exports.routes = {
  index: routeBase,
  vouchers: routeBase + 'vouchers',
  suppliers: routeBase + suppliers,
  suppliers_update: routeBase + suppliers + '/update/',
  issues: routeBase + 'issues'
};

module.exports.classes = {
  nonNumericCell: 'mdl-data-table__cell--non-numeric'
}
