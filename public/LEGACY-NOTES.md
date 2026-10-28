
# Lab 5 — Legacy jQuery Notes

## 1. Native JavaScript Equivalents

### 1. $(document).ready(fn)
Native equivalent:
```javascript
document.addEventListener("DOMContentLoaded", fn);
```
For a script loaded with `type="module"`, the DOM is already parsed before the module executes.

### 2. $("#name").val()
Native equivalent:
```javascript
document.querySelector("#name").value;
```

### 3. .after(html)
Native equivalent:
```javascript
input.insertAdjacentHTML("afterend", html);
```
A safer alternative for plain text is to create an element and use `input.after(element)`.

### 4. $(".error").remove()
Native equivalent:
```javascript
document.querySelectorAll(".error").forEach((el) => el.remove());
```

### 5. .text(...).hide().fadeIn(400)
Native equivalent for the text:
```javascript
status.textContent = message;
```
The hide and fade-in animation can be implemented with CSS transitions if needed. There is no single native JavaScript method that directly replaces the complete jQuery chain.

### 6. $form[0].reset()
Native equivalent:
```javascript
form.reset();
```

## 2. Three Legacy Smells

1. **Using `var`:** Modern JavaScript generally prefers `const` and `let` because they provide clearer scoping and reassignment rules.

2. **Using `$.trim()`:** Modern JavaScript strings have the built-in `trim()` method, such as `nameInput.value.trim()`.

3. **Building HTML as strings:** Inserting HTML strings can be less safe and harder to maintain. Creating elements with `document.createElement()` and setting `textContent` is safer for plain text.

