# fullstack app

Render URL: https://fullstack-app-lggj.onrender.com

Content Delivelry Network (CDN)

Ett CDN är en tjänst som kan spara och lagra kopior av webbsidors innehåll på flera ställen över världen genom att cacha datan. Det som är bra med detta är att om en server i tillexempel Europa går ner så kanske det finns en i Amerika eller Asien som datan kan hämtas ifrån istället. Det är även bra som man är ute och reser så hämtas datan från den närmsta servern så att laddtiden blir lägre. Ett CDN skyddar även den utsprungliga webbservern mot DDoS attaker då all trafik går genom CDN servrarna istället. Jag själv har en server hemma som jag har några tjänster på som tillexempel Cloud storrage och en media server så att jag kan kolla på filmer och annat som är sparade på min server. Jag använder Cloudflares DNS tjänst för att skydda mig så att inte vem som kan komma åt mina saker som inte ska det. Jag har även planer på att lägga upp en av mina webbapplikatitioner på min server och då tänke använda Cloudflaes CDN tjänst för att spara en kopia och leda om trafiken.

Monitorering

Att moitoera sitt CDN hjälper att se till så att allting körs som det ska och så att man kan säkerställa att prestandan är på topp. Man kan även se vart den största av den inkommande trafiken kommer iffrån, så att man kanske kan lägga fler resurster på de servraran så att prestandan inte blir för låg. Beroende på vilket monitorering program som man använder sig av så kan man få notiser eller ett mejl om tillexempel servrarna går ner eller om database inte längre kan nås av backend. Jag har tillexempel på min server så att jag får ett mejl varje vecka på hur mycket trafik som har varit på de olika tjänsterna som jag har på min server så att jag vet om jag kanske behöver tilldela mer ressurser till någon av dem. Jag använder Cloudflares monitorering för detta då det var lätt att slå på och jag behöver inte så avancerade funktioner.  