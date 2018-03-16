<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="SimpleMemoryGame._default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>LeagueOfMemory</title>
    <link href="style/maincss.css" rel="stylesheet" />

    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet"/>

</head>
<body>
    <form id="form1" runat="server">
    <div>
        <header>
            <div class="title">Memory Game <br />Inspired by <a class="link" href="https://eune.leagueoflegends.com/pl/">League of Legends</a></div>
        </header>
        <main>
            <div class="field">
                 <img class="card" id="s0"  />             
                 <img class="card" id="s1"  />             
                 <img class="card" id="s2"  />             
                 <img class="card" id="s3"  />             
                 <img class="card" id="s4"  />             
                 <img class="card" id="s5"  />             
                 <img class="card" id="s6"  />             
                 <img class="card" id="s7"  />             
                 <img class="card" id="s8"  />             
                 <img class="card" id="s9"  />             
                 <img class="card" id="s10" />            
                 <img class="card" id="s11" />            
                 
            </div>
        </main>
     <script src="scripts/first.js"></script>
    <script src="scripts/jquery-3.2.1.min.js"></script>
    </div>
    </form>
</body>
</html>
