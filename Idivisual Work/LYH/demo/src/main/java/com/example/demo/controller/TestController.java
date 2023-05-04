package com.example.demo.controller;

import java.sql.SQLException;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.DAO.TestDAO;
import com.example.demo.DTO.TestDTO;

@Controller
public class TestController {

    @Autowired
    TestDAO testrepository; 


    @RequestMapping(value="/test", method = RequestMethod.GET)
    public ModelAndView testingGET(TestDTO dto) throws DataAccessException, SQLException {
        ModelAndView mav = new ModelAndView();

        mav.addObject("dto", testrepository.getDataAll());

        mav.setViewName("test");

        System.out.println("is Get Method");
        return mav;
    }

    @RequestMapping(value="/test", method = RequestMethod.POST)
    public ModelAndView testingPOST(TestDTO dto) { 
        ModelAndView mav = new ModelAndView(); 

        mav.addObject("index", dto);

        mav.setViewName("test");

        System.out.println("is Post Method");
        return mav;
    }
}
