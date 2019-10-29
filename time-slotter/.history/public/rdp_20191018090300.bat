cmdkey /generic:TERMSRV/192.168.1.4 /user:"sa" /pass:"skabasb"
mstsc.exe /v:192.168.1.157:1337 /f


Dim oShell
Set oShell = WScript.CreateObject ("WScript.Shell")
oShell.run "cmd.exe /C mstsc.exe /v:192.168.1.4", 0, false

