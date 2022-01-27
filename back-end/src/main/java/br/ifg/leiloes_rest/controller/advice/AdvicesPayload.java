package br.ifg.leiloes_rest.controller.advice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class AdvicesPayload {

    @Autowired
    private MessageSource messageSource;

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(value = NoSuchElementException.class)
    protected ResponseEntity<Object> handleNullPointer(NoSuchElementException ex, WebRequest request) {
        //String bodyOfResponse = ex.getMessage();
        return ResponseEntity.badRequest().body("Elemento nao encontrado");
    }
}
