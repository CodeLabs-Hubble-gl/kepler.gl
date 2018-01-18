'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = _react2.default.createClass({
  displayName: 'Table',
  propTypes: {
    height: _propTypes2.default.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      height: '16px'
    };
  },
  render: function render() {
    return _react2.default.createElement(
      _base2.default,
      this.props,
      _react2.default.createElement('path', { d: 'M56.0384598,50.5v-8.3076935H8.9615383V50.5H56.0384598z M8.9615383,22.8076916h13.8461533V14.5H8.9615383 V22.8076916z M25.5769234,22.8076916h13.8461533V14.5H25.5769234V22.8076916z M42.1923065,22.8076916h13.8461533V14.5H42.1923065 V22.8076916z M8.9615383,36.6538467h47.0769196v-8.3076935H8.9615383V36.6538467z' })
    );
  }
});

exports.default = Table;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy90YWJsZS5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJoZWlnaHQiLCJzdHJpbmciLCJnZXREZWZhdWx0UHJvcHMiLCJyZW5kZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLGdCQUFNQyxXQUFOLENBQWtCO0FBQzlCQyxlQUFhLE9BRGlCO0FBRTlCQyxhQUFXO0FBQ1RDLFlBQVEsb0JBQVVDO0FBRFQsR0FGbUI7QUFLOUJDLGlCQUw4Qiw2QkFLWjtBQUNoQixXQUFPO0FBQ0xGLGNBQVE7QUFESCxLQUFQO0FBR0QsR0FUNkI7QUFVOUJHLFFBVjhCLG9CQVVyQjtBQUNQLFdBQ0U7QUFBQTtBQUFVLFdBQUtDLEtBQWY7QUFDRSw4Q0FBTSxHQUFFLG9UQUFSO0FBREYsS0FERjtBQU9EO0FBbEI2QixDQUFsQixDQUFkOztrQkFxQmVSLEsiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuY29uc3QgVGFibGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFibGUnLFxuICBwcm9wVHlwZXM6IHtcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6ICcxNnB4J1xuICAgIH07XG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8cGF0aCBkPVwiTTU2LjAzODQ1OTgsNTAuNXYtOC4zMDc2OTM1SDguOTYxNTM4M1Y1MC41SDU2LjAzODQ1OTh6IE04Ljk2MTUzODMsMjIuODA3NjkxNmgxMy44NDYxNTMzVjE0LjVIOC45NjE1MzgzXG5cdFYyMi44MDc2OTE2eiBNMjUuNTc2OTIzNCwyMi44MDc2OTE2aDEzLjg0NjE1MzNWMTQuNUgyNS41NzY5MjM0VjIyLjgwNzY5MTZ6IE00Mi4xOTIzMDY1LDIyLjgwNzY5MTZoMTMuODQ2MTUzM1YxNC41SDQyLjE5MjMwNjVcblx0VjIyLjgwNzY5MTZ6IE04Ljk2MTUzODMsMzYuNjUzODQ2N2g0Ny4wNzY5MTk2di04LjMwNzY5MzVIOC45NjE1MzgzVjM2LjY1Mzg0Njd6XCIvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ==