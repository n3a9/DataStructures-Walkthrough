/**
 * Complete implementation of a node in Javascript. Carries
 * a value element, and points to another node.
 *
 * @constructor
 * @param {*} value - the value element to be stored
 */
function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Will return the value of the node.
 *
 * @return {*} the value the node carries
 */
Node.prototype.getValue = function() {
  return this.value;
};

/**
 * Will return if the node points to another node.
 *
 * @return {Boolean} true if it points to another node, false if not
 */
Node.prototype.hasNext = function() {
  return (this.next !== null);
};

/**
 * Will return the node being pointed to if its not empty.
 *
 * @return {Node} the node that this node points to if not empty,
 * otherwise null
 */
Node.prototype.getNext = function() {
  var n = null;
  if (this.hasNext()) {
    n = this.next;
  }
  return n;
};

/**
 * Will change the value of the node and return the
 * old value.
 *
 * @param {*} newValue - the new value to be carried by the node
 * @return {*} the old value of the node
 */
Node.prototype.setValue = function(newValue) {
  var oldValue = this.value;
  this.value = newValue;
  return oldValue;
};

/**
 * Will update the node being pointed to and return the old one.
 *
 * @param {Node} node - the new node to point to
 * @return {Node} the old node
 */
Node.prototype.setNext = function(newNext) {
  var oldNext = this.next;
  this.next = newNext;
  return oldNext;
};
