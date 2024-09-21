-- INSERT data for group
INSERT INTO "groups" ("id","name","ownerId","type", "avatar", "background")
VALUES
  ('cly4j9nmr000108l72bh2bi2y','NestJS Viet Nam','clx1tm86b0000zwmwhumpz3a8','PUBLIC','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlM5NYH9egY-VXphzd985NXDn-iuNEoHObA&s', 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/434680591_3862422094082345_295595417321201819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeF1kwceBUajPHES6q3e1TkMPCthZxLYJtY8K2FnEtgm1mP89oztcWwrleqqVJU33nulzWJu8oBOKpT5913r5E-Z&_nc_ohc=6RDNDzVslX0Q7kNvgF5CQ9_&_nc_ht=scontent.fdad3-1.fna&oh=00_AYDOPE1p3HEcef0ebIkyh77drILpv02AKcZmN_w57kiAcQ&oe=66A28278'),
  ('cly4ja617000208l757vzbkqv','Devscript','clx1tm86b0000zwmwhumpz3a8','PRIVATE','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s', 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/434680591_3862422094082345_295595417321201819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeF1kwceBUajPHES6q3e1TkMPCthZxLYJtY8K2FnEtgm1mP89oztcWwrleqqVJU33nulzWJu8oBOKpT5913r5E-Z&_nc_ohc=6RDNDzVslX0Q7kNvgF5CQ9_&_nc_ht=scontent.fdad3-1.fna&oh=00_AYDOPE1p3HEcef0ebIkyh77drILpv02AKcZmN_w57kiAcQ&oe=66A28278'),
  ('cly4jaayh000308l77btpgxla','Tradecoin Viet Nam','clx1tm86b0000zwmwhumpz3a8','PUBLIC','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6GDc2Zz0TcwiOsMjFQgXi34XGJsU7h89Ig&s', 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/434680591_3862422094082345_295595417321201819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeF1kwceBUajPHES6q3e1TkMPCthZxLYJtY8K2FnEtgm1mP89oztcWwrleqqVJU33nulzWJu8oBOKpT5913r5E-Z&_nc_ohc=6RDNDzVslX0Q7kNvgF5CQ9_&_nc_ht=scontent.fdad3-1.fna&oh=00_AYDOPE1p3HEcef0ebIkyh77drILpv02AKcZmN_w57kiAcQ&oe=66A28278'),
  ('cly4jaell000408l715g9gctg','Son Tung MTP','clx1tm86b0000zwmwhumpz3a8','PUBLIC', 'https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj', 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/434680591_3862422094082345_295595417321201819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeF1kwceBUajPHES6q3e1TkMPCthZxLYJtY8K2FnEtgm1mP89oztcWwrleqqVJU33nulzWJu8oBOKpT5913r5E-Z&_nc_ohc=6RDNDzVslX0Q7kNvgF5CQ9_&_nc_ht=scontent.fdad3-1.fna&oh=00_AYDOPE1p3HEcef0ebIkyh77drILpv02AKcZmN_w57kiAcQ&oe=66A28278');

-- INSERT data for shortcuts table
INSERT INTO "short_cuts" ("id","groupId","userId")
VALUES
  ('clx2tl9uu0000kee8yu3tevw8','cly4j9nmr000108l72bh2bi2y','clx1tm86b0000zwmwhumpz3a8'),
  ('clx2tm5mg000018qaamya0bij','cly4ja617000208l757vzbkqv','clx1tm86b0000zwmwhumpz3a8'),
  ('clx2tm86b0000zwmwhumpz3a7','cly4jaayh000308l77btpgxla','clx1tm86b0000zwmwhumpz3a8');


-- INSERT data for group_members table
INSERT INTO "group_members" ("groupId","memberId")
VALUES
  ('cly4j9nmr000108l72bh2bi2y','clx1tm86b0000zwmwhumpz3a8'),
  ('cly4ja617000208l757vzbkqv','clx1tm86b0000zwmwhumpz3a8'),
  ('cly4jaayh000308l77btpgxla','clx1tm86b0000zwmwhumpz3a8'),
  ('cly4jaell000408l715g9gctg','clx1tm86b0000zwmwhumpz3a8')
