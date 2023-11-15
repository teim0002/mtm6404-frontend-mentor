let showMenu = false;


function showMenuCheck(e)
{
        let menu = document.getElementById("mobile-menu");
        
        if (showMenu == true)
        {
                menu.style.display = 'none';
                showMenu = false;
        }
        else
        {
                menu.style.display = 'flex';
                showMenu = true;
        }
}



document.getElementById("m").addEventListener('click', showMenuCheck);
document.getElementById("c").addEventListener('click', showMenuCheck);