let handA= numberRole;
let handB= numberRoleB;
let cardTypeA =cardSelectorA();
let cardTypeB= cardSelectorB();

funtion cardSelectorA()
{
/*rolls for card value*/
let numberRole = Math.floor(Math.random() * 13) + 1;
if (numberRole== 11)
{
	numberRole= 10;
	return 'Jack';
}
else if(numberRole== 12)
{
	numberRole= 10;
	return 'Queen';
}
else if(numberRole == 13)
{
	numberRole= 10;
	return 'King';
}
else if (numberRole == 1)
{      /* need to add choice between 1 or 1*/
	numberRole= 10;
	return 'Ace';
}

}
funtion cardSelectorB()
{
/*rolls for card value*/
let numberRoleB = Math.floor(Math.random() * 13) + 1;
if (numberRoleB== 11)
{
	numberRoleB= 10;
	return 'Jack';
}
else if(numberRoleB== 12)
{
	numberRoleB= 10;
	return 'Queen';
}
else if(numberRoleB == 13)
{
	numberRoleB= 10;
	return 'King';
}
else if (numberRoleB == 1)
{      /* need to add choice between 1 or 1*/
	numberRoleB= 10;
	return 'Ace';
}

}


