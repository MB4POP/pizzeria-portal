# Dashboard

- '/'
 - statystyki dzisiejszych zamówień (zdalne i lokalne)
 - lista rezerwacji i eventów zaplanowanych na dzisiaj
#

- '/login'
 - pola na login i hasło
 - guzik do zalogowania (link do dashboardu)

# Widok dostepności stolików

- '/tables'
 - wybór daty i godziny
 - tabela z listą rezerwacji oraz zdarzeń
   - każda kolumna to jeden stolik
   - każdy wiersz to blok 30 minut
   - tabela będzie przypominać widok tygodnia w kalendarzu googla gdzie w kolumnach zamiast dni są różne stoliki
   - po kliknieciu rezerwacji lub eventów przechodziny na stronę szczegółów

- '/tables/booking/: id'
 - zawiera wszystkie informacje dotyczące rezerwacji
 - musi zawierać edycję i zapisanie zmiany

- '/tables/booking/new'
 - analogicznie do powyżej bez początkowych informacji

- '/tables/events/: id'
 - analogicznie do powyżej dla eventów

- '/tables/events/new'
 - analogicznie do powyżej dla eventów bez początkowych informacji

# Widok kelnera

- '/waiter'
 - tabela, która:
   - w wierszach bedzie wyswietlała stoliki
   - w kolumnach różne rodzaje informacji np status stolika, czas od ostatniej aktywności
   - w ostaniej kolumnie dostepne akcje dla danego stolika

- '/waiter/order/new'
 - numer stolika edytowalny
 - menu produktów
 - opcje wybranego produktu
 - zamówienie czyli zamowione produkty z opcjami i ceną
 - kwota zamówienia

- '/waiter/order/: id'
 - jak powyżej

# Widok kuchni

- '/kitchen'
 - wyswietlamy listę zamówień w kolejności ich złożenia
 - lista musi zawierać:
   - numer stolika lub zamówiebia zdalnego
   - pełne informacje dotyczace zamówionych dań
 - na liscie musi byc mozliwość oznaczenia zamówienia jako zrealizowane
