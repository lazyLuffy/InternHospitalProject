
# Hospital Management Admin

This site is used to get information of all the patient of covid inside the Hospital and this site is also help for get admit in the Hospital


## Acknowledgements

 - [BOOTSTRAP](https://getbootstrap.com/)
 - [W3school](https://www.w3schools.com/)
 

  
## API Reference

#### Get all items

```http
  GET /user/
```


#### Get item

```http
  GET /user/${id}
```
#### Post item

```http
  Post /add-user
```
#### Update item

```http
  Post /add-user/${id}
```

#### Delte item

```http
  Post /remove-user/${id}
```

Takes Request, and return response in callback function(req,res)=>{

}

The resposnse will be in Ejs file with res.data coming for database

The request will be in any form Wheather it is json() form or xml form in body form.

  