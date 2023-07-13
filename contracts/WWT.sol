//SPDX License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity 0.8.12;
contract WWT is ERC20, Ownable{

    constructor() ERC20("WasteWarriorToken", "WWT") {
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
