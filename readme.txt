Struktúra információ:

- .sketch formátumban, illetve exportált verzióban is elérhető a design (ha nincs sketch)
- az Assets mappában található a design-hoz szükséges képek, ikonok
- data.json - ez tartalmazza a megjelenítendő blog szekcióhoz szükséges adatokat


Feladat:

- Le kell sitebuild-elni a design-t
- A fekete sáv alatti blog szekciót úgy kell megvalósítani, hogy javascript-el olvassuk be a data.json-t és annak tartalmát jelenítsük meg ott (bármilyen megoldás elfogadott. Pl.: jQuery ajax, Vue, etc..)


Instrukciók, elvárások:

- Preprocessor használata
- Valamilyen CSS framework használata
- Ikonok behúzása szabadon választott (több megoldás is lehetséges)
- A css framework által biztosított grid rendszer használata
- Task runner / build tool (CSS fordításhoz, esetleg javascripthez - utóbbi opcionális)
- A footerben egy egyszerű javascript-es formvalidáció (POST-ra nem lehet üres) (nem HTML5)
- Mobil és tablet felbontáson a layout megegyezhet (esetleg, ahol kártyák vannak, ott lehet módosítani a grid-en).
- A Hero hátterében lévő szöveg szintén opcionális, nem szükséges megvalósítani