// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PrismSale {

  uint public totalSales;
  uint public maxSales;

  address public owner;
  address public charity;

  mapping (address => bool) sales;

  constructor() {
    totalSales = 0;
    maxSales = 100;

    owner = 0xBb48921358830672583dd289f80b4552308d5998;
    charity = 0x7F196Aa5490DE2ea620F0De584236D0172852859;
  }

  function canBuy () public returns (bool) {
    return totalSales < maxSales;
  }

  function hasAccess () public returns (bool) {
    return sales[msg.sender];
  }

  function buy () public payable returns (bool) {
    require(canBuy() == true, "can't buy this");
    require(msg.value == 0.01 ether, "you didn't send the correct amount");
    require(hasAccess() == false, "already bought");

    payable(owner).transfer(msg.value * 80 / 100);
    payable(charity).transfer(msg.value * 20 / 100);

    totalSales = totalSales + 1;

    sales[msg.sender] = true;

    return true;
  }
}
