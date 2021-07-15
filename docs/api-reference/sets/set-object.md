---
sidebar_position: 1
---

# The set object

## Attributes

### **id** *string*

Unique identifier for the object.

---

### **name** *string*

The name of the set.

---

### **series** *string*

The series the set belongs to, like Sword and Shield or Base.

---

### **printedTotal** *integer*

The number printed on the card that represents the total. This total *does not* include secret rares.

---

### **total** *integer*

The total number of cards in the set, including secret rares, alternate art, etc.

---

### **legalities** *hash*

The legalities of the set. If a given format is not legal, it will not appear in the hash. This is a hash with the following fields:

| Property               | Description                                           |
|------------------------|-------------------------------------------------------|
| **standard** *string*  | The standard game format. Possible values are Legal.  |
| **expanded** *string*  | The expanded game format. Possible values are Legal.  |
| **unlimited** *string* | The unlimited game format. Possible values are Legal. |

---

### **ptcgoCode** *string*

The code the Pokémon Trading Card Game Online uses to identify a set.

---

### **releaseDate** *string*

The date the set was released (in the USA). Format is YYYY/MM/DD.

---

### **updatedAt** *string*

The date and time the set was updated. Format is YYYY/MM/DD HH:MM:SS.

---

### **images** *hash*

Any images associated with the set, such as symbol and logo. This is a hash with the following fields:

| Property            | Description                  |
|---------------------|------------------------------|
| **symbol** *string* | The url to the symbol image. |
| **logo** *string*   | The url to the logo image.   |

---

## Sample JSON

```json
{
    "id": "swsh1",
    "name": "Sword & Shield",
    "series": "Sword & Shield",
    "printedTotal": 202,
    "total": 216,
    "legalities": {
        "unlimited": "Legal",
        "standard": "Legal",
        "expanded": "Legal"
    },
    "ptcgoCode": "SSH",
    "releaseDate": "2020/02/07",
    "updatedAt": "2020/08/14 09:35:00",
    "images": {
        "symbol": "https://images.pokemontcg.io/swsh1/symbol.png",
        "logo": "https://images.pokemontcg.io/swsh1/logo.png"
    }
}
```